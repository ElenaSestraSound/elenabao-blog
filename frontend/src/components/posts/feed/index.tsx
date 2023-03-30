import { PostModel } from '@/lib/types';
import * as React from 'react';
import { v4 as uuid_v4 } from 'uuid'
import PostCard from '@/components/design-system/post-card';
import { Box } from '@chakra-ui/react';
import { feed } from './styles';

export interface IFeedProps {
    posts: PostModel[]
}

export default function Feed({ posts }: IFeedProps) {
    return (
        <Box css={feed}>
            {posts.map(post => <PostCard post={post} key={uuid_v4()} />)}
        </Box>
    );
}

