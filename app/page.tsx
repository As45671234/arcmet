import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import HotspotImage from '@/components/HotspotImage';
import OrderForm from '@/components/OrderForm';
import FadeIn from '@/components/FadeIn';

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
}

async function getProducts() {
  const filePath = path.join(process.cwd(), 'data', 'products.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents).products as Product[];
}

export default async function Home() {
  const products = await getProducts();
  
  const hotspots = [
    {
      id: 1,
      x: 30,
      y: 40,
      product: products[0] || { name: 'Product 1', price: '1000', image: '/img/placeholder.jpg' }
    },
    {
      id: 2,
      x: 60,
      y: 70,
      product: products[1] || { name: 'Product 2', price: '2000', image: '/img/placeholder.jpg' }
    }
  ];

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
      
      <section className="relative bg-gray-900 text-white py-20">
        <FadeIn className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Строительные материалы премиум класса</h1>
          <p className="text-xl mb-8 text-gray-300">Надежность. Качество. Инновации.</p>
          <Link href="/catalog" className="bg-orange-500 text-white px-8 py-3 rounded-full font-bold hover:bg-orange-600 transition-colors">
            Перейти в каталог
          </Link>
        </FadeIn>
      </section>

      <section className="container mx-auto px-4 py-16">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Наши объекты</h2>
          <HotspotImage imageSrc="/img/products/project-main.jpg" hotspots={hotspots} />
        </FadeIn>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Популярные товары</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {products.slice(0, 3).map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-48 bg-gray-200 relative">
                     <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-orange-500 font-bold text-lg">{product.price}</span>
                      <button className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors">
                        Подробнее
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <FadeIn className="max-w-2xl mx-auto">
          <OrderForm />
        </FadeIn>
      </section>

      <footer className="bg-gray-900 text-white p-12 mt-auto">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ARCMET</h3>
            <p className="text-gray-400">Ваш надежный партнер в строительстве.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <p className="text-gray-400">Телефон: +7 (707) 797-85-33</p>
            <p className="text-gray-400">Email: info@arcmet.kz</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Адрес</h3>
            <p className="text-gray-400">г. Астана</p>
          </div>
        </div>
        <div className="text-center mt-8 pt-8 border-t border-gray-800 text-gray-500">
          &copy; 2026 ARCMET. Все права защищены.
        </div>
      </footer>
    </main>
  );
}
