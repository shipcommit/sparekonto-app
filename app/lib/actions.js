import connectDb from '../db';
import Vector from '../models/Vector';
import { CohereClient } from 'cohere-ai';

const cohereApiKey = process.env.COHERE_API_KEY;

const cohere = new CohereClient({
  token: cohereApiKey,
});

export async function createSearchEmbeddings(query) {
  try {
    // Get query vector embeddings
    const documentRes = await cohere.embed({
      texts: [query],
      model: 'embed-multilingual-v3.0',
      inputType: 'search_query',
    });

    const embeddings = documentRes.embeddings[0];

    console.log('embeddings:', embeddings);

    return embeddings;
  } catch (err) {
    console.log(err);
  }
}

export async function vectorSearch(embedding) {
  try {
    const body = JSON.stringify({
      collection: 'vectors',
      database: 'test',
      dataSource: 'Cluster0',
      pipeline: [
        {
          $vectorSearch: {
            queryVector: embedding,
            path: 'embedding',
            numCandidates: 500,
            limit: 1,
            index: 'vector_index',
          },
        },
      ],
    });

    const response = await fetch(
      'https://eu-central-1.aws.data.mongodb-api.com/app/data-eyhyj/endpoint/data/v1/action/aggregate',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Request-Headers': '*',
          'api-key': process.env.MONGODB_DATA_API_KEY,
        },
        body,
      }
    );

    return response.json();
  } catch (err) {
    console.log(err);
  }
}
