import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';

// Create an OpenAI API client (that's edge friendly!)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// IMPORTANT! Set the runtime to edge
export const runtime = 'edge';

export async function POST(req) {
  let { messages } = await req.json();

  // Add a system message as the first prompt
  const systemMessages = [
    {
      role: 'system',
      content:
        'You are a helpful chat bot that assists Norwegians with finding a savings account with the best savings rates in Norway.',
    },
    {
      role: 'system',
      content: 'To answer questions you use data in your database.',
    },
    {
      role: 'system',
      content: 'The language you speak: Norwegian',
    },
  ];

  // Ensure the system message is the first in the array
  messages = [...systemMessages, ...messages];

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
}
