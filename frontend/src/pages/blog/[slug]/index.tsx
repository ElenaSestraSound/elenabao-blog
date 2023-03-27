import SideLayout from "@/components/design-system/layout/side-layout"
import SideHero from "@/components/design-system/side-hero"
import SinglePost from "@/components/single-post"
import { AuthorModel, PostModel } from "@/lib/types"
import { getAuthor, getSinglePost } from "@/lib/utils"
import { GetStaticPaths, GetStaticProps } from "next"
import { ParsedUrlQuery } from "querystring"
import client from "../../../../client"

interface ISinglePostPageProps {
    post: PostModel,
    author: AuthorModel
}

export default function SinglePostPage({ post, author }: ISinglePostPageProps) {
    return (
        <SideLayout>
            <SinglePost post={post} />
            <SideHero author={author} />
        </SideLayout>
    )
}

interface IParams extends ParsedUrlQuery {
    slug: string
}

export const getStaticProps: GetStaticProps = async (context) => {
    const { slug = "" } = context.params as IParams
    const post = await getSinglePost(slug)
    const author = await getAuthor(post.author)

    return {
        props: {
            post: post, author
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