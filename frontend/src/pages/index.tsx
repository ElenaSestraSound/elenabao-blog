import { Inter } from 'next/font/google'
import Hero from '@/components/home/hero'
import FeaturedPosts from '@/components/home/featured-posts'
import { LatestsPosts } from '@/components/home/latests-posts'
import Layout from '@/components/design-system/layout'
import { AuthorModel, PostModel, SanityPost } from '@/lib/types'
import { SanityPostToPostModel } from '@/lib/utils'
import { GetStaticProps } from 'next'
import client from '../../client'

interface IHomeProps {
  author: AuthorModel,
  featuredPosts: PostModel[],
  latestsPosts: PostModel[]
}

export default function Home({ author, featuredPosts, latestsPosts }: IHomeProps) {
  return (
    <Layout>
      <Hero />
      <FeaturedPosts posts={featuredPosts} />
      <LatestsPosts posts={latestsPosts} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const featuredPostsRaw = await client.fetch(`*[_type == "post" && featured==true]{
      title, 
      "slug":slug.current,
      "author": author->name,
      _createdAt,
      featured,
      "categories": categories[]->title,
      "image": mainImage.asset->url,
      body
  }`)

  const latestsPostsRaw = await client.fetch(`*[_type == "post"] | order(_createdAt desc) [0...3]{
      title, 
      "slug":slug.current,
      "author": author->name,
      _createdAt,
      featured,
      "categories": categories[]->title,
      "image": mainImage.asset->url,
      body
  }`)

  const featuredPosts = featuredPostsRaw.map((post: SanityPost) => SanityPostToPostModel(post))
  const latestsPosts = latestsPostsRaw.map((post: SanityPost) => SanityPostToPostModel(post))

  console.log(featuredPosts)

  return {
    props: {
      featuredPosts, latestsPosts
    },
  }
}
