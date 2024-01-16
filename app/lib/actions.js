import connectDb from '../db';
import Vector from '../models/Vector';
import { CohereClient } from 'cohere-ai';

const cohereApiKey = process.env.COHERE_API_KEY;

const cohere = new CohereClient({
  token: cohereApiKey,
});

export async function createSearchEmbeddings(query) {
  try {
    // // Connect to database

    //   Check if database contains any answers to the query
    const documentRes = await cohere.embed({
      texts: [query],
      model: 'embed-multilingual-v3.0',
      inputType: 'search_query',
    });

    const embedding = documentRes.embeddings[0];

    console.log('embedding:', embedding);

    // // Find documents
    // const documents = await Vector.aggregate([
    //   {
    //     $vectorSearch: {
    //       queryVector: embedding,
    //       path: 'embedding',
    //       numCandidates: 500,
    //       limit: limit,
    //       index: 'vector_index',
    //     },
    //   },
    // ]);

    // console.log('documents:', documents);

    // return documents;
  } catch (err) {
    console.log(err);
  }
}
