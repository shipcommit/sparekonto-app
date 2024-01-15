import Image from 'next/image';
import CtaForm from './ui/cta-form';
import Table from './ui/table';
import Hero from './ui/hero';

export default function Home() {
  return (
    <>
      <Hero />
      <CtaForm />
      <Table />
    </>
  );
}
