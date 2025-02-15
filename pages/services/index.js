import Head from 'next/head';
import Link from 'next/link';
import Header from 'C/components/Header';
import Image from 'next/image';

export default function Services() {
  return (
    <div className="min-h-screen text-white">
      <Head>
        <title>Services - Fanatsy</title>
        <meta name="description" content="Découvrez mes services de création de sites web optimisés, responsives et bien référencés." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <Header />
      
      <main className="flex flex-col items-center text-center py-16 px-6">
        <h1 className="text-5xl font-bold text-gray-100 mb-8">Mes Services</h1>
        
        <div className="flex flex-col gap-12 max-w-5xl">
        <div className="bg-gradient-to-r from-[#1b3a2b] to-[#265642] p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-grey-100">Développement Web</h2>
          <div className="flex flex-col md:flex-row items-center p-6 rounded-lg">
            <Image src="/développement-web.webp" alt="Développement Web" width={300} height={300} className="rounded-lg mb-6 md:mb-0 md:mr-6" />
            <div className="text-left">
              <p className="text-gray-300 text-xl">Développement sur mesure adapté à vos besoins allant du site vitrine à l'application web.</p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#1b3a2b] to-[#265642] p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-grey-100">Responsive Design</h2>
          <div className="flex flex-col md:flex-row items-center p-6 rounded-lg">
            <div className="text-left">
              <p className="text-gray-300 text-xl">Des sites qui s’adaptent parfaitement aux mobiles, tablettes et ordinateurs pour une expérience optimale.</p>
            </div>
            <Image src="/responsive-design.png" alt="Responsive design" width={350} height={300} className="rounded-lg mb-6 md:mb-0 md:ml-6" />
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#1b3a2b] to-[#265642] p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-grey-100">Optimisation SEO</h2>
          <div className="flex flex-col md:flex-row items-center p-6 rounded-lg">
            <Image src="/seo.webp" alt="SEO" width={300} height={300} className="rounded-lg mb-6 md:mb-0 md:mr-6" />
            <div className="text-left">
              <p className="text-gray-300 text-xl">Un référencement naturel optimisé pour améliorer la visibilité de votre site sur Google.</p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#1b3a2b] to-[#265642] p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-grey-100">Hébergement</h2>
          <div className="flex flex-col md:flex-row items-center p-6 rounded-lg">
            <div className="text-left">
              <p className="text-gray-300 text-xl">Solutions d’hébergement fiables, sécurisées et performantes.</p>
            </div>
            <Image src="/hébergement.webp" alt="Hébergement Web" width={300} height={300} className="rounded-lg mb-6 md:mb-0 md:ml-6" />
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#1b3a2b] to-[#265642] p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-grey-100">Performance et Sécurité</h2>
          <div className="flex flex-col md:flex-row items-center p-6 rounded-lg">
            <Image src="/rapide.webp" alt="Développement Web" width={300} height={300} className="rounded-lg mb-6 md:mb-0 md:mr-6" />
            <div className="text-left">
              <p className="text-gray-300 text-xl">Sites rapides et sécurisés et temps de chargement optimisés.</p>
            </div>
          </div>
        </div>
        </div>
      </main>
    </div>
  );
}
