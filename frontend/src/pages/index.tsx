import { Inter } from 'next/font/google'
import Hero from '@/components/home/hero'
import FeaturedPosts from '@/components/home/featured-posts'
import { LatestsPosts } from '@/components/home/latests-posts'
import Layout from '@/components/design-system/layout'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <FeaturedPosts />
      <LatestsPosts />
    </Layout>
  )
}
