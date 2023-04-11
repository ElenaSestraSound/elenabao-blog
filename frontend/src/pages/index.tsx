import Hero from '@/components/home/hero'
import FeaturedPosts from '@/components/home/featured-posts'
import { LatestsPosts } from '@/components/home/latests-posts'
import Layout from '@/components/design-system/layout'
import { PostModel } from '@/lib/types'
import { getFeaturedPosts, getLatestsPosts } from '@/lib/utils'
import { GetStaticProps } from 'next'
import Head from 'next/head'

interface IHomeProps {
  featuredPosts: PostModel[],
  latestsPosts: PostModel[]
}

export default function Home({ featuredPosts, latestsPosts }: IHomeProps) {
  return (
    <>
      <Head>
        <title>Elena Bao&apos;s Blog</title>
        <meta property='description' content='Welcome to my web development blog!' key='desc' />
        <meta property='og:title' content="Elena Bao's Blog" />
        <meta property='og:description' content='Welcome to my web development blog!' />
        <meta property='og:image' content='/home/bao.png' />
      </Head>
      <Hero />
      <FeaturedPosts posts={featuredPosts} />
      <LatestsPosts posts={latestsPosts} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const featuredPosts = await getFeaturedPosts()
  const latestsPosts = await getLatestsPosts()

  return {
    props: {
      featuredPosts, latestsPosts
    },
  }
}
