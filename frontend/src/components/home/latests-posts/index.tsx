import PostCard from '@/components/design-system/post-card';
import { Box, Flex, Heading, Spacer } from '@chakra-ui/react';
import * as React from 'react';
import * as styles from './styles'

export interface ILatestsPostsProps {
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
},
{
    title: 'Dummy Post 3',
    slug: 'dummy-post-3',
    author: 'Elena',
    categories: ['React', 'Redux'],
    date: '28/03/2023',
    image: '/home/hero-image.jpg',
    content: 'This is a third dummy post',
    featured: true
},
]

export function LatestsPosts(props: ILatestsPostsProps) {
    return (
        <Box css={styles.latestsPosts}>
            <Heading>LATESTS POSTS</Heading>
            <Flex>
                {DUMMY_POSTS.map((post, index) => {
                    let isLast = false
                    if (index === (DUMMY_POSTS.length - 1)) {
                        isLast = true
                    }
                    return (
                        <>
                            <PostCard post={post} />
                            {!isLast && <Spacer />}
                        </>
                    )
                })}
            </Flex>
        </Box>
    );
}
