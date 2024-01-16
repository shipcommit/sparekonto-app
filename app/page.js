'use client';

import CtaForm from './ui/cta-form';
import Table from './ui/table';
import Hero from './ui/hero';
import Chat from './ui/chat';

export default function Home() {
  return (
    <>
      <Hero />
      <Chat />
      <CtaForm />
      <Table />
    </>
  );
}
