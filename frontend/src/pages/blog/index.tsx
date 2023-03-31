import SideLayout from "@/components/design-system/layout/side-layout"
import SideHero from "@/components/design-system/side-hero"
import Feed from "@/components/posts/feed"
import { AuthorModel, PostModel, } from "@/lib/types"
import { getAllPosts, getAuthor } from "@/lib/utils"
import { Box } from "@chakra-ui/react"
import { GetStaticProps } from "next"

interface IAllPostsPageProps {
    posts: PostModel[],
    author: AuthorModel
}

function AllPostsPage({ posts, author }: IAllPostsPageProps) {
    return (
        <SideLayout background="brand.backgroundSecondary">
            <Feed posts={posts} />
            <SideHero author={author} />
        </SideLayout>
    )
}

export default AllPostsPage

export const getStaticProps: GetStaticProps = async () => {
    const posts = await getAllPosts()
    const author = await getAuthor('Elena Bao')

    return {
        props: {
            posts, author
        },
    }
}