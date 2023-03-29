import PostCard from "@/components/design-system/post-card";
import { PostModel } from "@/lib/types";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, Spacer } from "@chakra-ui/react";
import * as styles from "./styles"
import { v4 as uuid_v4 } from 'uuid'
import { Fragment } from "react";

interface IFeaturedPostsProps {
    posts: PostModel[]
}


export default function FeaturedPosts({ posts }: IFeaturedPostsProps) {
    return (
        <Flex css={styles.featuredPosts} alignItems='center'>
            <Spacer />
            <Box color='brand.textPrimary'>
                <Heading as='h2' maxW='300px'>CHECK OUT</Heading>
                <Heading as='h2' maxW='300px'>MY FEATURED</Heading>
                <Heading as='h2' maxW='300px'>POSTS</Heading>
                <ArrowForwardIcon />
            </Box>
            <Spacer />
            {posts.map((post, index) => {
                return (<Fragment key={uuid_v4()}>
                    <PostCard post={post} />
                    {index == 0 && <Spacer />}
                </Fragment>)
            })}
        </Flex>
    );
}
