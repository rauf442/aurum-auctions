// frontend/aurum/src/app/news/page.tsx
"use client"

import React, { useState, useEffect } from 'react'
import { ArticlesList, type Article } from '@msaber/shared'

export default function NewsPage() {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    loadArticles()
  }, [])

  const loadArticles = async () => {
    try {
      setLoading(true)
      setError(null)

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/articles?published_only=true&brand_id=2`,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )

      if (!response.ok) {
        throw new Error('Failed to fetch articles')
      }

      const data = await response.json()
      
      if (data.success) {
        setArticles(data.data || [])
      } else {
        throw new Error(data.message || 'Failed to load articles')
      }

    } catch (err) {
      console.error('Error loading articles:', err)
      setError(err instanceof Error ? err.message : 'Failed to load articles')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 border-b border-yellow-500/30 text-yellow-400 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">News, Views & Insights</h1>
          <p className="text-xl text-yellow-200/70">
            Stay updated with the latest from Aurum Auctions
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-yellow-500 border-t-transparent"></div>
          </div>
        ) : error ? (
          <div className="bg-red-900/20 border border-red-500/30 text-red-400 px-4 py-3 rounded-lg">
            {error}
          </div>
        ) : (
          <ArticlesList 
            articles={articles} 
            brandCode="AURUM"
            showFeatured={true}
          />
        )}
      </div>
    </div>
  )
}

