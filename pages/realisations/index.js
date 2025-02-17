import SEOHead from 'C/components/SEOHead';
import Image from 'next/image';

const projects = [
  {
    title: "Owarida",
    image: "/img/projects/owacollect-mockup.png",
    description: "Application de collection de carte",
  },
  {
    title: "NovaConnect",
    image: "/img/projects/novaconnect-mockup.png",
    description: "Site d'entreprise",
  },
  {
    title: "Ethereal Souls",
    image: "/img/projects/etherealSouls-mockup.png",
    description: "Site web de jeu vidéo",
  },
  {
    title: "Solo Leveling Builder",
    image: "/img/projects/soloLevelingBuilder-mockup.png",
    description: "Application de building",
  },
  {
    title: "Re:Take",
    image: "/img/projects/retake-mockup.png",
    description: "Site web chaine youtube",
  },
];

export default function Realisations() {
  return (
    <div className="min-h-screen text-white">
      <SEOHead 
        title="Réalisations"
        description="Découvrez mes projets réalisés en développement web."
        url="https://fanatsy.dev/realisations"
      />
      
      <main className="flex flex-col items-center text-center py-16 px-6">
        <h1 className="text-5xl font-bold text-gray-100 mb-8">Réalisations</h1>
        <p className="text-gray-300 max-w-3xl mb-12 text-lg">
          Voici des exemples de sites/applications réalisés.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl">
          {projects.map((project, index) => (
            <div key={index} className="bg-[#265642] p-8 rounded-lg shadow-lg text-center w-full sm:w-[90%] lg:w-[100%]">
              <Image src={project.image} alt={project.title} width={500} height={500} className="rounded-lg mb-4" />
              <h2 className="text-3xl font-bold text-green-400 mb-4">{project.title}</h2>
              <p className="text-gray-200 text-lg">{project.description}</p>
            </div>
          ))}
        </div> 
      </main>
    </div>
  );
}