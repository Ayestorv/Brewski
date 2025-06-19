import { notFound } from 'next/navigation';
import MenuCategory from '@/components/menu/MenuCategory';
import menuItemsData from '@/data/menuItems.json';

const validCategories = ['appetizers', 'mains', 'sides', 'desserts'];

export async function generateStaticParams() {
  return validCategories.map((category) => ({
    category,
  }));
}

export default async function MenuCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  if (!validCategories.includes(category)) {
    notFound();
  }

  const items = menuItemsData.filter((item) => item.category === category);

  return <MenuCategory category={category} items={items} />;
}
