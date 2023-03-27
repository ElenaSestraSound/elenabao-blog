import PostCard from "@/components/design-system/post-card";
import { PostModel } from "@/lib/types";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, Spacer } from "@chakra-ui/react";
import * as styles from "./styles"

interface IFeaturedPostsProps {
    posts: PostModel[]
}


export default function FeaturedPosts({ posts }: IFeaturedPostsProps) {
    return (
        <Flex css={styles.featuredPosts} alignItems='center'>
            <Spacer />
            <Box>
                <Heading as='h2' maxW='300px'>CHECK OUT</Heading>
                <Heading as='h2' maxW='300px'>MY FEATURED</Heading>
                <Heading as='h2' maxW='300px'>POSTS</Heading>
                <ArrowForwardIcon />
            </Box>
            {posts.map(post => <PostCard post={post} />)}
        </Flex>
    );
}
