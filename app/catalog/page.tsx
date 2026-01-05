import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import CatalogClient from '@/components/CatalogClient';

async function getProducts() {
  const filePath = path.join(process.cwd(), 'data', 'products.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents).products;
}

export default async function CatalogPage() {
  const products = await getProducts();

  return (
    <main className="min-h-screen flex flex-col bg-white">
       <header className="bg-gray-900 text-white p-4 sticky top-0 z-50 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold tracking-wider">ARCMET</div>
          <nav className="space-x-6 hidden md:block">
            <Link href="/" className="hover:text-orange-500 transition-colors">Главная</Link>
            <Link href="/catalog" className="hover:text-orange-500 transition-colors">Каталог</Link>
            <Link href="/about" className="hover:text-orange-500 transition-colors">О компании</Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">Каталог товаров</h1>
        <CatalogClient products={products} />
      </div>
    </main>
  );
}
