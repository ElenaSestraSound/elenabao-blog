import SideLayout from "@/components/design-system/layout/side-layout"
import SideHero from "@/components/design-system/side-hero"
import SinglePost from "@/components/single-post"

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


function SinglePostPage() {
    return (
        <SideLayout>
            <SinglePost post={DUMMY_POST} />
            <SideHero author={DUMMY_AUTHOR} />
        </SideLayout>
    )
}

export default SinglePostPage