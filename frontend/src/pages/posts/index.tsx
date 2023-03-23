import Layout from "@/components/design-system/layout"
import SideLayout from "@/components/design-system/layout/side-layout"
import SideHero from "@/components/design-system/side-hero"
import Feed from "@/components/posts/feed"

const DUMMY_AUTHOR = {
    name: 'Elena Bao',
    image: '/home/hero-image.jpg',
    url: 'https://elenabao.vercel.app/',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lectus nibh, vulputate non lacus id, tristique scelerisque mi. Sed condimentum pellentesque elit quis congue. Mauris ornare congue vehicula. In viverra lacus nunc, nec sollicitudin ante volutpat id. Sed eget cursus sapien. Quisque facilisis fringilla nisi vitae faucibus.'
}

function AllPostsPage() {
    return (
        <SideLayout>
            <Feed />
            <SideHero author={DUMMY_AUTHOR} />
        </SideLayout>
    )
}

export default AllPostsPage