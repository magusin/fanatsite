import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/legacy/image';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

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
            className={`fixed top-0 left-0 w-full h-[80px] transition-all duration-500 ease-in-out shadow-md ${isScrolled ? 'bg-[#19503480] bg-opacity-90 backdrop-blur-md' : 'bg-[#195034]'} px-6 flex justify-between items-center z-50`}
        >
            <Link href="/" className="flex items-center">
                <Image src="/logo.png" alt="Logo" width={80} height={80} className="h-16 w-auto" priority />
            </Link>
             {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6 sm:space-x-12 m-4 text-lg font-semibold text-white">
                <Link href="/portfolio" className="hover:text-green-400 transition-colors">Portfolio</Link>
                <Link href="/services" className="hover:text-green-400 transition-colors">Services</Link>
                <Link href="/contact" className="hover:text-green-400 transition-colors">Contact</Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden text-white text-3xl focus:outline-none"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? <FiX /> : <FiMenu />}
            </button>

            {/* Mobile Navigation */}
            <div
                className={`fixed top-0 left-0 w-full h-screen bg-[#195034] bg-opacity-95 flex flex-col items-center justify-center transition-transform duration-300 ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <button
                    className="absolute top-6 right-6 text-white text-3xl focus:outline-none"
                    onClick={() => setMenuOpen(false)}
                >
                    <FiX />
                </button>
                <nav className="flex flex-col space-y-6 text-2xl font-semibold text-white">
                    <Link href="/portfolio" className="hover:text-green-400 transition-colors" onClick={() => setMenuOpen(false)}>Portfolio</Link>
                    <Link href="/services" className="hover:text-green-400 transition-colors" onClick={() => setMenuOpen(false)}>Services</Link>
                    <Link href="/contact" className="hover:text-green-400 transition-colors" onClick={() => setMenuOpen(false)}>Contact</Link>
                </nav>
            </div>
        </header>
    );
}