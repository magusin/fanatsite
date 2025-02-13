import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';

export default function Services() {
  return (
    <div className="min-h-screen text-white">
      <Head>
        <title>Services - Fanatsy</title>
        <meta name="description" content="Découvrez mes services de création de sites web optimisés et performants." />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>
      
      <Header />
      
      <main className="flex flex-col items-center text-center py-16 px-6">
        <h1 className="text-5xl font-bold text-green-400 mb-8">Mes Services</h1>
        <p className="text-gray-300 max-w-3xl mb-12 text-lg">
          Je vous propose des services de développement web sur mesure, optimisés pour la performance et le référencement.
          Que vous ayez besoin d'un site vitrine, d'une boutique en ligne ou d'une application web, je vous accompagne.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl">
          <div className="bg-[#1b3a2b] p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold text-white">Développement sur mesure</h2>
            <p className="text-gray-300 mt-4">Des sites adaptés à vos besoins avec Next.js et Tailwind CSS.</p>
          </div>
          <div className="bg-[#1b3a2b] p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold text-white">Optimisation SEO</h2>
            <p className="text-gray-300 mt-4">Un référencement naturel amélioré pour plus de visibilité.</p>
          </div>
          <div className="bg-[#1b3a2b] p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold text-white">Performance et Sécurité</h2>
            <p className="text-gray-300 mt-4">Des sites ultra-rapides et sécurisés pour une meilleure expérience utilisateur.</p>
          </div>
        </div>
        
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-green-400 mb-6">Une idée, un projet ?</h2>
          <p className="text-gray-300 mb-4">Contactez-moi et donnons vie à votre projet digital !</p>
          <Link href="/contact" className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-700 transition">
            Me contacter
          </Link>
        </div>
      </main>
    </div>
  );
}
