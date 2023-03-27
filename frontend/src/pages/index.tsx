import { Inter } from 'next/font/google'
import Hero from '@/components/home/hero'
import FeaturedPosts from '@/components/home/featured-posts'
import { LatestsPosts } from '@/components/home/latests-posts'
import Layout from '@/components/design-system/layout'
import { AuthorModel, PostModel, SanityPost } from '@/lib/types'
import { getFeaturedPosts, getLatestsPosts } from '@/lib/utils'
import { GetStaticProps } from 'next'
import client from '../../client'

interface IHomeProps {
  featuredPosts: PostModel[],
  latestsPosts: PostModel[]
}

export default function Home({ featuredPosts, latestsPosts }: IHomeProps) {
  return (
    <Layout>
      <Hero />
      <FeaturedPosts posts={featuredPosts} />
      <LatestsPosts posts={latestsPosts} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const featuredPosts = await getFeaturedPosts()
  const latestsPosts = await getLatestsPosts()

  console.log(featuredPosts)

  return {
    props: {
      featuredPosts, latestsPosts
    },
  }
}
