import { PostModel } from '@/lib/types';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Card, CardBody, Heading, Image, Link, Text } from '@chakra-ui/react';
import * as React from 'react';
import * as styles from './styles'

export interface IFeedItemProps {
    post: PostModel
}

export default function SinglePost({ post }: IFeedItemProps) {
    return (<>
        <Image src={post.image} alt={post.title} borderRadius='lg' />
        <Heading>{post.title}</Heading>
        <Text>{post.date}</Text>
        <Text>{post.content}</Text>
    </>
    );
}