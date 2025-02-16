import Head from 'next/head';

export default function Contact() {
    return (
      <div className="min-h-screen text-white">
        <Head>
          <title>Contact - Fanatsy</title>
          <meta name="description" content="Contactez-moi pour discuter de votre projet web." />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        
        <main className="flex flex-col items-center text-center py-16 px-6">
          <h1 className="text-5xl font-bold text-gray-100 mb-8">Me Contacter</h1>
          <p className="text-gray-300 max-w-3xl mb-12 text-lg">
            Discutons ensemble de votre projet ! Vous pouvez me contacter directement par email ou téléphone.
          </p>
          
          <div className="bg-gradient-to-r from-[#1b3a2b] to-[#265642] p-8 rounded-lg shadow-lg w-full max-w-lg text-center">
            <p className="text-gray-300 text-lg mb-4">📧 Email : <span className="text-green-400 hover:underline">fanatsy.dev@gmail.com</span></p>
            <p className="text-gray-300 text-lg">📞 Téléphone : <span className="text-green-400 hover:underline">+33 7 64 45 03 82</span></p>
          </div>
        </main>
      </div>
    );
  }