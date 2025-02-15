import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 300) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="bg-gradient-to-b from-[#252525] via-[#18332a] to-[#2d655b] min-h-screen text-white">
            <Head>
        <title>Créateur de Sites Web - Fanatsy</title>
        <meta name="description" content="Création de sites web modernes et optimisés pour le SEO. Découvrez mes créations et contactez-moi !" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>
      
  
      
      <main className="flex-1 min-h-screen flex flex-col items-center px-4 sm:px-6 md:px-8">
        <div className="w-full flex flex-col items-center pt-10">
          <video className="rounded-full object-cover lg:h-[400px] h-[200px] md:h-[300px] sm:h-[250px] shadow-lg" autoPlay muted playsInline>
            <source src="/video/intro.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-10 px-4 sm:px-6 md:px-12 mt-16 opacity-0 animate-fade-in">
        <div className="bg-gradient-to-r from-[#1b3a2b] to-[#265642] p-6 rounded-lg shadow-lg sm:w-96 text-center">
            <h1 className="text-3xl font-bold text-white">Boostez votre présence en ligne</h1>
            <p className="text-gray-300 mt-4">
              Création de sites web performants, modernes et optimisés pour le référencement.
              Maximisez votre impact digital dès aujourd'hui !
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-[#1b4332] to-[#2d6a4f] p-6 rounded-lg shadow-lg sm:w-96 text-center">
            <h2 className="text-3xl font-bold text-white">Services professionnels</h2>
            <p className="text-gray-300 mt-4">
              - Développement personnalisé<br/>
              - Référencement avancé<br/>
              - Sécurité et rapidité optimales
            </p>
          </div>
        </div>
        
        <section className={`w-full py-20 text-center mt-16 px-6 transition-opacity duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold text-white mb-6">Mes engagements</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-gradient-to-r from-[#1b4332] to-[#2d6a4f] p-6 rounded-lg shadow-lg w-80">
              <h3 className="text-xl font-bold text-white">Innovation et Créativité</h3>
              <p className="text-gray-300 mt-2">Des designs uniques et modernes adaptés à votre image.</p>
            </div>
            <div className="bg-gradient-to-r from-[#1b4332] to-[#2d6a4f] p-6 rounded-lg shadow-lg w-80">
              <h3 className="text-xl font-bold text-white">Visibilité Maximale</h3>
              <p className="text-gray-300 mt-2">Un référencement naturel amélioré pour plus de trafic.</p>
            </div>
            <div className="bg-gradient-to-r from-[#1b4332] to-[#2d6a4f] p-6 rounded-lg shadow-lg w-80">
              <h3 className="text-xl font-bold text-white">Sécurité et Performance</h3>
              <p className="text-gray-300 mt-2">Des sites rapides et sécurisés pour une meilleure expérience utilisateur.</p>
            </div>
          </div>
        </section>
        
        <section className="w-full py-20 text-center mt-8 px-6">
          <div className="bg-gradient-to-r from-[#14532d] to-[#1e3a2f] p-10 rounded-lg shadow-lg w-3/4 mx-auto flex flex-col items-center">
            <Image src="/idea.webp" alt="idea image" width={250} height={250} className="mb-6 opacity-90 rounded-lg" priority />
            <h2 className="text-4xl font-bold text-white">Une idée, un projet ?</h2>
            <p className="text-gray-200 mt-4 text-lg">Discutons ensemble et transformons vos idées en réalité digitale.</p>
            <Link href="/contact" className="mt-6 inline-block bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-700 transition">
              Contactez-moi
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white p-6 text-center mt-10">
        <p>&copy; 2025 - Fanatsy</p>
        <Link href="https://malt.fr/profil-tonnom" target="_blank" className="text-green-400 hover:text-green-300">Me contacter sur Malt</Link>
      </footer>
    </div>
  );
}

