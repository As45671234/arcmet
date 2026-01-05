import Link from 'next/link';

export default function AboutPage() {
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

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">О компании ARCMET</h1>
        
        <div className="prose lg:prose-xl text-gray-700">
          <p>
            ТОО «ARCMET» НАЧАЛ СВОЮ ДЕЯТЕЛЬНОСТЬ В 2015 ГОДУ В ГОРОДЕ АСТАНА. НАШИ ОСНОВАТЕЛИ ОБЪЕДИНИЛИ
            СВОИ ОПЫТ И ЗНАНИЯ, ЧТОБЫ УДОВЛЕТВОРИТЬ РАСТУЩИЙ СПРОС НА НАДЕЖНЫЕ И
            ИННОВАЦИОННЫЕ МАТЕРИАЛЫ ДЛЯ РАЗЛИЧНЫХ СТРОИТЕЛЬНЫХ ПРОЕКТОВ.
          </p>
          <p>
            С годами компания «ARCMET» стала надежным партнером для строительных компаний,
            для предприятий оптовой и розничной торговли. Мы расширили свой ассортимент,
            чтобы предложить вам новейшие гидроизоляционные, шумоизоляционные, теплоизоляционные
            материалы, кровельные системы водоотвода и вентиляции, кровельные аксессуары.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Наши партнеры</h2>
          <p>
            Были заключены договоры о дистрибьюторстве с таким крупными производителями, как
            «PLASTFOIL», «RHEINZINK», «PENOPLEX», «FACHMANN» и др.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Преимущества работы с нами</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Быстрая и надежная доставка:</strong> Мы предлагаем оперативную доставку материалов прямо на стройплощадку.</li>
            <li><strong>Профессиональные консультации:</strong> Наша команда всегда готова помочь вам выбрать необходимые материалы.</li>
            <li><strong>Экологически чистые материалы:</strong> Мы придерживаемся высоких стандартов экологической ответственности.</li>
            <li><strong>Опыт:</strong> С годами ТОО «ARCMET» стала одним из лидеров в сфере поставок строительных материалов.</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
