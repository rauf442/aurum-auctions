// frontend/aurum/src/app/page.tsx
// Purpose: Aurum Home - Bold dark theme with gold accents showcasing accessible auctions
"use client"

// Disable static generation to avoid SSR issues
export const dynamic = 'force-dynamic'

import { cn } from '@msaber/shared';
import Link from 'next/link';
import Image from 'next/image';
import { getPublicAuctions, type Auction, NewsSection } from '@msaber/shared';
import { useState, useEffect } from 'react';

function formatDate(d: string | undefined) {
  if (!d) return '';
  const dt = new Date(d);
  return dt.toLocaleString(undefined, { dateStyle: 'medium', timeStyle: 'short' });
}

function UpcomingAuctions({ auctions }: { auctions: Auction[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {auctions.map((a: Auction) => (
        <Link
          key={a.id}
          href={`/auctions/${a.id}`}
          className="group block bg-gray-900/90 rounded-xl shadow-2xl hover:shadow-yellow-500/20 transition-all duration-300 border border-yellow-500/30 hover:border-yellow-400 overflow-hidden"
        >
          {/* Image Placeholder */}
          <div className="aspect-[16/10] bg-gradient-to-br from-gray-800 to-black relative overflow-hidden">
            {a.title_image_url ? (
              <Image
                src={a.title_image_url}
                alt={a.long_name || a.short_name}
                fill
                style={{objectFit: 'cover'}}
                className="group-hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-black">
                <div className="text-6xl opacity-30">🏆</div>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-3 left-3 right-3">
              <div className="text-xs text-yellow-400/80 uppercase tracking-wider font-medium mb-1">
                {a.type?.toUpperCase?.()} AUCTION
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-yellow-400 group-hover:text-yellow-300 transition-colors line-clamp-2 mb-3 leading-tight">
              {a.long_name || a.short_name}
            </h3>
            <div className="flex items-center justify-between text-sm">
              <div className="text-yellow-200/70">
                <div className="font-medium">{formatDate(a.settlement_date)}</div>
              </div>
              {a.total_estimate_low && a.total_estimate_high && (
                <div className="text-right">
                  <div className="text-yellow-400 font-semibold">
                    £{a.total_estimate_low.toLocaleString()} - £{a.total_estimate_high.toLocaleString()}
                  </div>
                  <div className="text-yellow-200/50 text-xs">Estimated Value</div>
                </div>
              )}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default function Home() {
  const [auctions, setAuctions] = useState<Auction[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadAuctions = async () => {
      try {
        const res = await getPublicAuctions({ status: 'planned', limit: 6, sort_field: 'settlement_date', sort_direction: 'asc' })
        setAuctions(res.auctions)
      } catch (error) {
        console.error('Failed to load auctions:', error)
      } finally {
        setLoading(false)
      }
    }
    loadAuctions()
  }, [])

  return (
    <div className="min-h-screen will-change-transform bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden will-change-transform">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 via-transparent to-yellow-500/5 will-change-auto" />
        <div className="relative container mx-auto px-4 py-20 lg:py-32 transform-gpu">
          <div className="text-center max-w-5xl mx-auto">
            {/* Main Title */}
            <h1 className={cn(
              "text-6xl sm:text-7xl lg:text-8xl font-black mb-6 tracking-tight",
              "bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 bg-clip-text text-transparent",
              "drop-shadow-[0_0_30px_rgba(250,224,112,0.3)]"
            )}>
              Aurum
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl lg:text-3xl text-yellow-200 mb-8 font-light tracking-wide leading-relaxed">
              Accessible Auction House
            </p>

            {/* Tagline */}
            <p className="text-lg sm:text-xl text-yellow-200/70 mb-12 font-light max-w-3xl mx-auto leading-relaxed">
              Your marketplace for general items, collectibles, and everyday treasures
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link
                href="/auctions"
                className="px-8 py-4 bg-yellow-500 text-black font-bold text-lg rounded-full shadow-[0_0_30px_rgba(250,224,112,0.4)] hover:shadow-[0_0_50px_rgba(250,224,112,0.6)] hover:scale-105 transition-all duration-300 transform"
              >
                Explore Auctions
              </Link>
              <Link
                href="#services"
                className="px-8 py-4 border-2 border-yellow-500/60 text-yellow-400 font-semibold text-lg rounded-full hover:bg-yellow-400/10 hover:border-yellow-400 transition-all duration-300"
              >
                Our Services
              </Link>
            </div>

            {/* Hero Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-1">2,500+</div>
                <div className="text-yellow-200/60 text-sm uppercase tracking-wide">Items Sold</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-1">500+</div>
                <div className="text-yellow-200/60 text-sm uppercase tracking-wide">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-1">24/7</div>
                <div className="text-yellow-200/60 text-sm uppercase tracking-wide">Online Bidding</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        {/* Upcoming Auctions */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-yellow-400 mb-4">Upcoming Auctions</h2>
            <p className="text-yellow-200/70 text-lg max-w-2xl mx-auto">
              Discover amazing finds in our carefully curated collections
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-yellow-500 border-t-transparent"></div>
            </div>
          ) : (
            <UpcomingAuctions auctions={auctions} />
          )}

          <div className="text-center mt-12">
            <Link
              href="/auctions"
              className="inline-flex items-center px-6 py-3 border border-yellow-500/60 text-yellow-400 font-medium rounded-full hover:bg-yellow-400/10 hover:border-yellow-400 transition-all duration-300"
            >
              View All Auctions
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </section>

        {/* Our Services */}
        <section id="services" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-yellow-400 mb-4">Our Services</h2>
            <p className="text-yellow-200/70 text-lg max-w-2xl mx-auto">
              Simple and straightforward auction services for everyone
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/inventory-form" className="group block bg-gradient-to-br from-gray-900/90 to-black rounded-2xl p-8 shadow-2xl border border-yellow-500/30 hover:border-yellow-400 transition-all duration-300 hover:transform hover:scale-105 will-change-transform transform-gpu">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(250,224,112,0.3)] group-hover:shadow-[0_0_30px_rgba(250,224,112,0.5)] transition-shadow duration-300">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4 group-hover:text-yellow-300 transition-colors">Request A Valuation</h3>
              <p className="text-yellow-200/70 leading-relaxed">
                Get started with a free valuation from our expert team.
              </p>
              <div className="mt-4 flex items-center text-yellow-400 font-medium">
                <span>Get Started</span>
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>

            <div className="group bg-gradient-to-br from-gray-900/90 to-black rounded-2xl p-8 shadow-2xl border border-yellow-500/30 hover:border-yellow-400 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(250,224,112,0.3)]">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Buying Guide</h3>
              <p className="text-yellow-200/70 leading-relaxed">
                Learn how to bid and buy with confidence at Aurum auctions.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-gray-900/90 to-black rounded-2xl p-8 shadow-2xl border border-yellow-500/30 hover:border-yellow-400 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(250,224,112,0.3)]">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Collection & Shipping</h3>
              <p className="text-yellow-200/70 leading-relaxed">
                Convenient collection and affordable shipping services available.
              </p>
            </div>
          </div>
        </section>

        {/* Consign Your Items */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-yellow-400 mb-4">Ready to Sell?</h2>
            <p className="text-yellow-200/70 text-lg max-w-2xl mx-auto">
              Submit your items for free valuation and easy auction placement
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900/90 to-black rounded-2xl p-8 shadow-2xl border border-yellow-500/30">
              <div className="text-center">
                <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(250,224,112,0.3)]">
                  <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">Submit Your Inventory</h3>
                <p className="text-yellow-200/70 text-lg mb-8 max-w-2xl mx-auto">
                  Our team will provide a free valuation and guide you through our simple
                  consignment process. Multiple items can be submitted for review.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link
                    href="/inventory-form"
                    className="px-8 py-4 bg-yellow-500 text-black font-bold text-lg rounded-full shadow-[0_0_30px_rgba(250,224,112,0.4)] hover:shadow-[0_0_50px_rgba(250,224,112,0.6)] hover:scale-105 transition-all duration-300 transform"
                  >
                    Start Submission
                  </Link>
                  <Link
                    href="/auctions"
                    className="px-6 py-3 border-2 border-yellow-500/60 text-yellow-400 font-medium rounded-full hover:bg-yellow-400/10 hover:border-yellow-400 transition-all duration-300"
                  >
                    View Current Auctions
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* News & Insights */}
        <NewsSection
          brandId={2}
          brandCode="AURUM"
          title="News, Views & Insights"
          description="Stay informed with the latest market intelligence and expert perspectives"
          theme="dark"
          limit={3}
        />

        {/* Lot Archive Search */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-yellow-400 mb-4">Lot Archive</h2>
            <p className="text-yellow-200/70 text-lg max-w-2xl mx-auto">
              Search through our comprehensive archive of past auctions and results
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900/90 to-black rounded-2xl p-8 shadow-2xl border border-yellow-500/30">
              <div className="relative">
                <input
                  placeholder="Search by artist, period, or lot number..."
                  className="w-full px-6 py-4 rounded-xl border border-yellow-500/60 bg-black/50 text-white placeholder-yellow-200/50 text-lg focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30 transition-all duration-300"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 p-3 bg-yellow-500 text-black rounded-lg hover:bg-yellow-400 transition-colors duration-300 shadow-[0_0_20px_rgba(250,224,112,0.3)]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
              <div className="mt-4 text-center">
                <span className="text-yellow-200/50 text-sm">Advanced search features coming soon</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
