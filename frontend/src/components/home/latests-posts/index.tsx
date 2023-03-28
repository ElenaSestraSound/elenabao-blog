import PostCard from '@/components/design-system/post-card';
import { PostModel } from '@/lib/types';
import { Box, Flex, Heading, Spacer } from '@chakra-ui/react';
import * as React from 'react';
import * as styles from './styles'
import { v4 as uuid_v4 } from 'uuid'

export interface ILatestsPostsProps {
    posts: PostModel[]
}

export function LatestsPosts({ posts }: ILatestsPostsProps) {
    return (
        <Box css={styles.latestsPosts}>
            <Heading color='brand.textPrimary'>LATESTS POSTS</Heading>
            <Flex>
                {posts.map((post, index) => {
                    let isLast = false
                    if (index === (posts.length - 1)) {
                        isLast = true
                    }
                    return (
                        <React.Fragment key={uuid_v4()}>
                            <PostCard post={post} />
                            {!isLast && <Spacer />}
                        </React.Fragment>
                    )
                })}
            </Flex>
        </Box>
    );
}
