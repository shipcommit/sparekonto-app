import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse, CohereStream } from 'ai';
import { createSearchEmbeddings, vectorSearch } from '../../lib/actions';

// Create an OpenAI API client (that's edge friendly!)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// // IMPORTANT! Set the runtime to edge
export const runtime = 'edge';

export async function POST(req) {
  try {
    let { messages } = await req.json();

    const query = messages[0].content;

    // Add a system message as the first prompt
    const systemMessages = [
      {
        role: 'system',
        content:
          'You are a helpful chat bot that only assists Norwegians with finding a savings account with the best savings rates in Norway.',
      },
      {
        role: 'system',
        content: 'You only suggest one option when asked.',
      },
      {
        role: 'system',
        content: 'Use natural sentences when answering.',
      },
      {
        role: 'system',
        content: 'The language you speak: Norwegian',
      },
    ];

    // Get query vector embeddings
    const searchEmbeddings = await createSearchEmbeddings(query);

    console.log('searchEmbeddings:', searchEmbeddings);

    // Search vector database with query embeddings
    const databaseResponse = await vectorSearch(searchEmbeddings);

    console.log('databaseResponse.documents:', databaseResponse.documents);

    // Add data from vector database to prompt if found
    if (databaseResponse.documents.length > 0) {
      // Create RAG string
      let ragString = `${databaseResponse.documents[0].url} ${databaseResponse.documents[0].text}`;

      // console.log('ragString:', ragString);

      const vectorDataMessages = [
        {
          role: 'system',
          content: `To answer the next question, use this information:
            ${ragString}`,
        },
      ];

      // Add data from the vector database to the prompt
      messages = [...vectorDataMessages, ...systemMessages, ...messages];
    }
    {
      //>>> Kan legge byttes ut med logikk for å komme med et forslag til en bank, uten noe rente info
      // Hvor det nevnes at ingen ting kan finnes i databasen
      messages = [...systemMessages, ...messages];
    }

    console.log('messages:', messages);

    // Ask OpenAI for a streaming chat completion given the prompt
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      stream: true,
      messages,
    });

    // Convert the response into a friendly text-stream
    const stream = OpenAIStream(response);
    // Respond with the stream

    return new StreamingTextResponse(stream);
  } catch (err) {
    console.log(err);
  }
}
