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

    const embedding = documentRes.embeddings[0];

    console.log('embedding:', embedding);

    return embedding;
  } catch (err) {
    console.log(err);
  }
}

// const body = JSON.stringify({
//     collection: 'vectors',
//     database: 'test',
//     dataSource: 'Cluster0',
//     pipeline: [
//       {
//         $search: {
//           index: 'vector_index',

//           compound: {
//             should: [
//               {
//                 vector: {
//                   path: 'embedding',
//                   query: embedding,
//                   score: { boost: { value: 1 } },
//                 },
//               },
//             ],
//           },
//         },
//       },
//       { $limit: 3 },
//     ],
//     //   projection: {
//     //     _id: 1,
//     //   },
//   });

//   const databaseResponse = await fetch(
//     'https://eu-central-1.aws.data.mongodb-api.com/app/data-eyhyj/endpoint/data/v1/action/findOne',
//     {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Access-Control-Request-Headers': '*',
//         'api-key': process.env.MONGODB_DATA_API_KEY,
//       },
//       body,
//     }
//   );

//   console.log('databaseResponse:', databaseResponse);

//   // // Find documents
//   // const documents = await Vector.aggregate([
//   //   {
//   //     $vectorSearch: {
//   //       queryVector: embedding,
//   //       path: 'embedding',
//   //       numCandidates: 500,
//   //       limit: limit,
//   //       index: 'vector_index',
//   //     },
//   //   },
//   // ]);

//   // console.log('documents:', documents);

//   // return documents;
