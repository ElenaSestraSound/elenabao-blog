import SideHero from '@/components/design-system/side-hero';
import { PostModel } from '@/lib/types';
import { Box, Flex } from '@chakra-ui/react';
import * as React from 'react';
import FeedItem from './feed-item/feed-item';

export interface IFeedProps {
    posts: PostModel[]
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

export default function Feed({ posts }: IFeedProps) {
    return (
        <>
            {posts.map(post => <FeedItem post={post} />)}
        </>
    );
}

