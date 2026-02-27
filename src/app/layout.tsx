import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader, SiteFooter } from "@msaber/shared";
import aurumLogo from "../../assets/brand_logo_aurum.jpeg";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Aurum Auctions",
  description: "Your accessible marketplace for general items, collectibles, and everyday treasures.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <SiteHeader
          logoSrc={(aurumLogo as unknown as { src: string }).src || (aurumLogo as unknown as string)}
          brandName="Aurum"
          logoHref="/"
          theme={{
            bgClass: 'bg-black',
            borderClass: 'border-b border-yellow-500/30',
            textClass: 'text-yellow-400',
            hoverTextClass: 'hover:text-yellow-300 transition-colors duration-200',
            hoverBgClass: 'hover:bg-yellow-400/10 transition-all duration-200 rounded-lg'
          }}
          links={[
            {
              label: 'Auctions',
              menuGroups: [
                {
                  title: 'Auctions',
                  links: [
                    { label: 'Upcoming Auctions', href: '/auctions?status=planned' },
                    { label: 'Results', href: '/auctions?status=ended' },
                    { label: 'Buying with Aurum', href: '/buying' }
                  ]
                },
                {
                  title: 'Services',
                  links: [
                    { label: 'Aurum Online Bidding', href: '/auctions' },
                    { label: 'Invoice Payment', href: '/pay' },
                    { label: 'FAQs', href: '/faq' }
                  ]
                }
              ]
            },
            { label: 'Departments', href: '#' },
            {
              label: 'Services',
              menuGroups: [
                {
                  title: 'Selling',
                  links: [
                    { label: 'Selling with Aurum', href: '#' },
                    { label: 'Request an Online Valuation', href: '/inventory-form' },
                    { label: 'Book a Valuation or Collection', href: '#' }
                  ]
                },
                {
                  title: 'Support',
                  links: [
                    { label: 'Valuation Days & Events Calendar', href: '#' },
                    { label: 'Private Client Valuations', href: '#' },
                    { label: 'Collection & Shipping', href: '/collection-shipping' }
                  ]
                }
              ]
            },
            {
              label: 'Discover',
              menuGroups: [
                {
                  title: 'Content & Insights',
                  links: [
                    { label: 'News, Views & Insights', href: '#' },
                    { label: 'Newsletter Sign Up', href: '#' },
                    { label: 'Artists, Authors, Designers & Makers', href: '#' }
                  ]
                },
                {
                  title: 'Media',
                  links: [
                    { label: 'Aurum in the Press', href: '#' }
                  ]
                }
              ]
            },
            {
              label: 'About',
              menuGroups: [
                {
                  title: 'Our Company',
                  links: [
                    { label: 'About Aurum', href: '/about' },
                    { label: 'Locations', href: '#' },
                    { label: 'Careers at Aurum', href: '/careers' },
                    { label: 'An Award-Winning Saleroom', href: '#' }
                  ]
                },
                {
                  title: 'Values & Community',
                  links: [
                    { label: 'Sustainability at Aurum', href: '#' },
                    { label: 'Press Office', href: '#' },
                    { label: 'Cultural Enrichment & Charity Partnerships', href: '#' },
                    { label: 'Client Testimonials', href: '#' },
                    { label: 'Our Core Values', href: '/core-values' }
                  ]
                }
              ]
            },
            { label: 'My Account', href: '#' }
          ]}
        />
        {children}
        <SiteFooter
          brandCopyright="Aurum"
          brandCode="AURUM"
          theme={{
            bgClass: 'bg-black text-yellow-400',
            borderClass: 'border-yellow-500/30',
            textClass: 'text-yellow-200/70',
            headingClass: 'font-semibold text-yellow-400',
            inputClass: 'border border-yellow-500/60 bg-black/50 text-white placeholder-yellow-200/50',
            buttonClass: 'px-4 py-2 bg-yellow-500 text-black rounded'
          }}
          linkGroups={[
            { title: 'Popular Pages', links: [
              { label: 'Upcoming Auctions', href: '/auctions' },
              { label: 'Consign Your Items', href: '/inventory-form' },
              { label: 'Results', href: '/auctions?status=ended' },
              { label: 'News & Articles', href: '#' },
              { label: 'Buying', href: '#' },
              { label: 'Selling', href: '#' },
              { label: 'Collection & Shipping', href: '#' },
              { label: 'FAQs', href: '#' },
            ]},
            { title: 'Connect', links: [
              { label: 'Facebook', href: '#' },
              { label: 'Instagram', href: '#' },
              { label: 'LinkedIn', href: '#' }
            ]}
          ]}
        />
      </body>
    </html>
  );
}
