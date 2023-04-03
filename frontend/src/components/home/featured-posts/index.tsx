import PostCard from "@/components/design-system/post-card";
import { PostModel } from "@/lib/types";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, Spacer } from "@chakra-ui/react";
import { v4 as uuid_v4 } from 'uuid'
import { Fragment } from "react";
import { featuredPosts } from "./styles";
import { slideInLeft } from "@/components/design-system/animations";

interface IFeaturedPostsProps {
    posts: PostModel[]
}


export default function FeaturedPosts({ posts }: IFeaturedPostsProps) {
    return (
        <Flex css={[featuredPosts, slideInLeft]} alignItems='center'>
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
