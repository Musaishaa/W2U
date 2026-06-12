import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Promos } from '../components/Promos';
import { Categories } from '../components/Categories';
import { Newsletter } from '../components/Newsletter';

export function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-900">
      <Hero />
      <Features />
      <Promos />
      <Categories />
      <Newsletter />
    </div>
  );
}