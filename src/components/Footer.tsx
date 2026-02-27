// frontend/aurum/src/components/Footer.tsx
// Purpose: Footer styled similar to reference with locations, popular pages, newsletter stub
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-16 bg-blue-100/70 text-blue-900 border-t border-blue-200">
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-semibold mb-3">Locations & Contact</h4>
          <p className="text-sm">Stansted Auction Rooms<br/>T 01279 817778 | E auctions@aurum.com</p>
          <p className="text-sm mt-3">Hertford<br/>T 01992 583508 | E hertford@aurum.com</p>
          <p className="text-sm mt-3">London<br/>T 0203 971 2500 | E london@aurum.com</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Popular Pages</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/auctions" className="hover:underline">Upcoming Auctions</Link></li>
            <li><Link href="/auctions?status=ended" className="hover:underline">Results</Link></li>
            <li><Link href="#" className="hover:underline">News & Articles</Link></li>
            <li><Link href="#" className="hover:underline">Buying</Link></li>
            <li><Link href="#" className="hover:underline">Selling</Link></li>
            <li><Link href="#" className="hover:underline">Collection & Shipping</Link></li>
            <li><Link href="#" className="hover:underline">FAQs</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Connect With Us</h4>
          <div className="flex gap-3 text-blue-800">
            <span>FB</span><span>IG</span><span>IN</span>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Newsletter</h4>
          <form className="space-y-2">
            <input type="text" placeholder="First name" className="w-full rounded border border-blue-300 px-3 py-2 bg-white/80" />
            <input type="text" placeholder="Surname" className="w-full rounded border border-blue-300 px-3 py-2 bg-white/80" />
            <input type="email" placeholder="Email" className="w-full rounded border border-blue-300 px-3 py-2 bg-white/80" />
            <button type="button" className="px-4 py-2 bg-indigo-600 text-white rounded">Submit</button>
          </form>
        </div>
      </div>
      <div className="border-t border-blue-200 py-4 text-xs text-blue-800">
        <div className="container mx-auto px-4 flex flex-wrap items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} Aurum. All Rights Reserved.</div>
          <div className="flex gap-3">
            <Link href="#" className="hover:underline">Cookies</Link>
            <Link href="#" className="hover:underline">Terms</Link>
            <Link href="#" className="hover:underline">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}


