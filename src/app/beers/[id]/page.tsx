import { notFound } from 'next/navigation';
import BeerDetail from '@/components/beer/BeerDetail';
import beersData from '@/data/beers.json';
import { Beer } from '@/types';

export async function generateStaticParams() {
  return beersData.map((beer) => ({
    id: beer.id,
  }));
}

export default async function BeerPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const beer = beersData.find((b) => b.id === id) as Beer | undefined;

  if (!beer) {
    notFound();
  }

  return <BeerDetail beer={beer} />;
}
