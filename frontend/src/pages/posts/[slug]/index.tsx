import SideLayout from "@/components/design-system/layout/side-layout"
import SideHero from "@/components/design-system/side-hero"
import SinglePost from "@/components/single-post"
import { AuthorModel, PostModel } from "@/lib/types"
import { GetStaticPaths, GetStaticProps } from "next"
import { ParsedUrlQuery } from "querystring"
import client from "../../../../client"

const DUMMY_AUTHOR = {
    name: 'Elena Bao',
    image: '/home/hero-image.jpg',
    url: 'https://elenabao.vercel.app/',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lectus nibh, vulputate non lacus id, tristique scelerisque mi. Sed condimentum pellentesque elit quis congue. Mauris ornare congue vehicula. In viverra lacus nunc, nec sollicitudin ante volutpat id. Sed eget cursus sapien. Quisque facilisis fringilla nisi vitae faucibus.'
}

const DUMMY_POST = {
    title: 'Dummy Post 1',
    slug: 'dummy-post',
    author: 'Elena',
    categories: ['React', 'Nextjs'],
    date: '25/03/2023',
    image: '/home/hero-image.jpg',
    content: 'This is a dummy post',
    featured: true
}

interface ISinglePostPageProps {
    post: PostModel,
    author: AuthorModel
}


function SinglePostPage({ post, author }: ISinglePostPageProps) {
    return (
        <SideLayout>
            <SinglePost post={post} />
            <SideHero author={DUMMY_AUTHOR} />
        </SideLayout>
    )
}

export default SinglePostPage

interface IParams extends ParsedUrlQuery {
    slug: string
}

export const getStaticProps: GetStaticProps = async (context) => {
    const { slug = "" } = context.params as IParams
    const postData = await client.fetch(`*[_type == "post" && slug.current == $slug][0]{
        title, 
        slug,
        "author": author->name,
        _createdAt,
        featured,
        "categories": categories[]->title,
        "image": mainImage.asset->url,
        body
    }`, { slug })

    const post: PostModel = {
        title: postData.title,
        slug: postData.slug,
        author: postData.author,
        categories: postData.categories,
        date: postData._createdAt,
        image: postData.image,
        content: postData.body,
        featured: postData.featured
    }

    return {
        props: {
            post: post
        },
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = await client.fetch(`*[_type == "post" && defined(slug.current)][].slug.current`)
    return {
        paths: paths.map((slug: string) => ({ params: { slug } })),
        fallback: true,
    }
}