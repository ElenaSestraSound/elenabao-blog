import { PostModel } from '@/lib/types';
import * as React from 'react';
import FeedItem from './feed-item/feed-item';
import { v4 as uuid_v4 } from 'uuid'

export interface IFeedProps {
    posts: PostModel[]
}

export default function Feed({ posts }: IFeedProps) {
    return (
        <>
            {posts.map(post => <FeedItem post={post} key={uuid_v4()} />)}
        </>
    );
}

