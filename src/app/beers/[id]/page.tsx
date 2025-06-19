import { notFound } from 'next/navigation';
import BeerDetail from '@/components/beer/BeerDetail';
import beersData from '@/data/beers.json';
import { Beer } from '@/types';

export async function generateStaticParams() {
  return beersData.map((beer) => ({
    id: beer.id,
  }));
}

export default function BeerPage({ params }: { params: { id: string } }) {
  const beer = beersData.find((b) => b.id === params.id) as Beer | undefined;

  if (!beer) {
    notFound();
  }

  return <BeerDetail beer={beer} />;
}
