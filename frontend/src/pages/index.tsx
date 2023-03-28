import Hero from '@/components/home/hero'
import FeaturedPosts from '@/components/home/featured-posts'
import { LatestsPosts } from '@/components/home/latests-posts'
import Layout from '@/components/design-system/layout'
import { PostModel } from '@/lib/types'
import { getFeaturedPosts, getLatestsPosts } from '@/lib/utils'
import { GetStaticProps } from 'next'
import { Box } from '@chakra-ui/react'

interface IHomeProps {
  featuredPosts: PostModel[],
  latestsPosts: PostModel[]
}

export default function Home({ featuredPosts, latestsPosts }: IHomeProps) {
  return (
    <Layout background='brand.backgroundSecondary'>
      <Box pt='40px' pb='40px'>
        <Hero />
        <FeaturedPosts posts={featuredPosts} />
        <LatestsPosts posts={latestsPosts} />
      </Box>
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
