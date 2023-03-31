import Hero from '@/components/home/hero'
import FeaturedPosts from '@/components/home/featured-posts'
import { LatestsPosts } from '@/components/home/latests-posts'
import Layout from '@/components/design-system/layout'
import { PostModel } from '@/lib/types'
import { getFeaturedPosts, getLatestsPosts } from '@/lib/utils'
import { GetStaticProps } from 'next'

interface IHomeProps {
  featuredPosts: PostModel[],
  latestsPosts: PostModel[]
}

export default function Home({ featuredPosts, latestsPosts }: IHomeProps) {
  return (
    <Layout background='brand.backgroundSecondary'>
      <Hero />
      <FeaturedPosts posts={featuredPosts} />
      <LatestsPosts posts={latestsPosts} />
    </Layout>
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
