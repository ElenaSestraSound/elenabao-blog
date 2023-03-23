import PostCard from "@/components/design-system/post-card";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, Spacer } from "@chakra-ui/react";
import * as styles from "./styles"

interface IFeaturedPostsProps {
}

const DUMMY_POSTS = [{
    title: 'Dummy Post 1',
    slug: 'dummy-post',
    author: 'Elena',
    categories: ['React', 'Nextjs'],
    date: '25/03/2023',
    image: '/home/hero-image.jpg',
    content: 'This is a dummy post',
    featured: true
},
{
    title: 'Dummy Post 2',
    slug: 'dummy-post-2',
    author: 'Elena',
    categories: ['React', 'Redux'],
    date: '28/03/2023',
    image: '/home/hero-image.jpg',
    content: 'This is a second dummy post',
    featured: true
}
]

export default function FeaturedPosts(props: IFeaturedPostsProps) {
    return (
        <Flex css={styles.featuredPosts} alignItems='center'>
            <Spacer />
            <Box>
                <Heading as='h2' maxW='300px'>CHECK OUT</Heading>
                <Heading as='h2' maxW='300px'>MY FEATURED</Heading>
                <Heading as='h2' maxW='300px'>POSTS</Heading>
                <ArrowForwardIcon />
            </Box>
            {DUMMY_POSTS.map(post => <PostCard post={post} />)}
        </Flex>
    );
}
