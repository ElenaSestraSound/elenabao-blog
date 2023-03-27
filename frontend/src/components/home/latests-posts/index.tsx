import PostCard from '@/components/design-system/post-card';
import { PostModel } from '@/lib/types';
import { Box, Flex, Heading, Spacer } from '@chakra-ui/react';
import * as React from 'react';
import * as styles from './styles'

export interface ILatestsPostsProps {
    posts: PostModel[]
}

export function LatestsPosts({ posts }: ILatestsPostsProps) {
    return (
        <Box css={styles.latestsPosts}>
            <Heading>LATESTS POSTS</Heading>
            <Flex>
                {posts.map((post, index) => {
                    let isLast = false
                    if (index === (posts.length - 1)) {
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
