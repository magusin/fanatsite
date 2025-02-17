import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#115235] text-white p-6 text-center">
      <p className="text-gray-400">&copy; 2025 - Fanatsy. Tous droits réservés.</p>
      <nav className="flex justify-center space-x-6 mt-4 text-gray-300 text-sm">
        <Link href="/cgu" className="hover:text-green-400 transition">Conditions Générales d'Utilisation</Link>
        <span>|</span>
        <Link href="/mentions-legales" className="hover:text-green-400 transition">Mentions Légales</Link>
      </nav>
    </footer>
  );
}