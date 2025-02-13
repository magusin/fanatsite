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
            className={`fixed top-0 left-0 w-full transition-all duration-500 ease-in-out shadow-md ${isScrolled ? 'bg-[#19503480] bg-opacity-90 backdrop-blur-md' : 'bg-[#195034]'} px-6 flex justify-between items-center z-50`}
        >
            <Link href="/" className="flex items-center">
                <Image src="/logo.png" alt="Logo" width={100} height={100} className="h-14 w-auto" priority />
            </Link>
            <nav className="flex space-x-16 m-4 text-lg font-semibold">
                <Link href="/portfolio" className="text-gray-200 hover:text-green-400 transition-colors">Portfolio</Link>
                <Link href="/services" className="text-gray-200 hover:text-green-400 transition-colors">Services</Link>
                <Link href="/contact" className="text-gray-200 hover:text-green-400 transition-colors">Contact</Link>
            </nav>
        </header>
    );
}