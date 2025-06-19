import { notFound } from 'next/navigation';
import MenuCategory from '@/components/menu/MenuCategory';
import menuItemsData from '@/data/menuItems.json';

const validCategories = ['appetizers', 'mains', 'sides', 'desserts'];

export async function generateStaticParams() {
  return validCategories.map((category) => ({
    category,
  }));
}

export default function MenuCategoryPage({ params }: { params: { category: string } }) {
  if (!validCategories.includes(params.category)) {
    notFound();
  }

  const items = menuItemsData.filter((item) => item.category === params.category);

  return <MenuCategory category={params.category} items={items} />;
}
