import Layout from "@/components/design-system/layout"
import SideLayout from "@/components/design-system/layout/side-layout"
import SideHero from "@/components/design-system/side-hero"
import Feed from "@/components/posts/feed"
import { AuthorModel, PostModel, SanityPost } from "@/lib/types"
import { SanityPostToPostModel } from "@/lib/utils"
import { GetStaticProps } from "next"
import client from "../../../client"

const DUMMY_AUTHOR = {
    name: 'Elena Bao',
    image: '/home/hero-image.jpg',
    url: 'https://elenabao.vercel.app/',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lectus nibh, vulputate non lacus id, tristique scelerisque mi. Sed condimentum pellentesque elit quis congue. Mauris ornare congue vehicula. In viverra lacus nunc, nec sollicitudin ante volutpat id. Sed eget cursus sapien. Quisque facilisis fringilla nisi vitae faucibus.'
}

interface IAllPostsPageProps {
    posts: PostModel[],
    author: AuthorModel
}

function AllPostsPage({ posts, author }: IAllPostsPageProps) {
    return (
        <SideLayout>
            <Feed posts={posts} />
            <SideHero author={DUMMY_AUTHOR} />
        </SideLayout>
    )
}

export default AllPostsPage

export const getStaticProps: GetStaticProps = async () => {
    const postsRaw = await client.fetch(`*[_type == "post"] | order(_createdAt desc){
        title, 
        "slug":slug.current,
        "author": author->name,
        _createdAt,
        featured,
        "categories": categories[]->title,
        "image": mainImage.asset->url,
        body
    }`)

    const posts = postsRaw.map((post: SanityPost) => SanityPostToPostModel(post))

    console.log(posts)

    return {
        props: {
            posts
        },
    }
}