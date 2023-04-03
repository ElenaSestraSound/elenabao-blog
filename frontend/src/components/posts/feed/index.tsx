import { PostModel } from '@/lib/types';
import * as React from 'react';
import { v4 as uuid_v4 } from 'uuid'
import PostCard from '@/components/design-system/post-card';
import { Box } from '@chakra-ui/react';
import { feed } from './styles';
import { slideInLeft } from '@/components/design-system/animations';

export interface IFeedProps {
    posts: PostModel[]
}

export default function Feed({ posts }: IFeedProps) {
    return (
        <Box css={[feed, slideInLeft]}>
            {posts.map(post => <PostCard post={post} key={uuid_v4()} />)}
        </Box>
    );
}

