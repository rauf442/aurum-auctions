// frontend/aurum/src/components/Header.tsx
// Purpose: Sticky top navigation bar themed for Aurum brand
import Link from 'next/link';
import Image from 'next/image';
import aurumLogo from '../../assets/brand_logo_aurum.jpeg';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-blue-100">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <Image src={aurumLogo} alt="Aurum" width={120} height={32} className="h-8 w-auto object-contain" />
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-blue-900">
          <Link href="/auctions" className="hover:text-indigo-700">Auctions</Link>
          <Link href="#" className="hover:text-indigo-700">Departments</Link>
          <Link href="#" className="hover:text-indigo-700">Services</Link>
          <Link href="#" className="hover:text-indigo-700">Discover</Link>
          <Link href="#" className="hover:text-indigo-700">About</Link>
          <Link href="#" className="hover:text-indigo-700">My Account</Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link aria-label="Search" href="/auctions" className="p-2 rounded hover:bg-blue-100 text-blue-900" title="Search">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path fillRule="evenodd" d="M10.5 3a7.5 7.5 0 015.905 12.134l3.23 3.231a1 1 0 01-1.414 1.414l-3.23-3.23A7.5 7.5 0 1110.5 3zm0 2a5.5 5.5 0 100 11 5.5 5.5 0 000-11z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
}


