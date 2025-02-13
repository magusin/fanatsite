import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/legacy/image';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full transition-all duration-500 ease-in-out shadow-md ${
        isScrolled ? 'bg-[#19503480] bg-opacity-90 backdrop-blur-md' : 'bg-[#195034]'
      } p-4 flex justify-between items-center z-50`}
    >
      <Image src="/img.webp" alt="Logo" width={50} height={50} className="h-12" priority />
      <nav className="space-x-12 m-4">
        <Link href="/portfolio" className="text-gray-300 hover:text-green-400">Portfolio</Link>
        <Link href="/services" className="text-gray-300 hover:text-green-400">Services</Link>
        <Link href="/contact" className="text-gray-300 hover:text-green-400">Contact</Link>
      </nav>
    </header>
  );
}