import { PostModel } from '@/lib/types';
import { Card, Heading, CardBody, Box, Image, Tag } from '@chakra-ui/react';
import Link from 'next/link';
import * as React from 'react';
import * as styles from './styles'

export interface IPostCardProps {
    post: PostModel
}

export default function PostCard({ post }: IPostCardProps) {
    return (
        <Link href={`/blog/${post.slug}`}>
            <Card maxW='sm'>
                <Box css={styles.postCardTags}>
                    {post.categories.map(categorie => <Tag m='0 5px;'>{categorie}</Tag>)}
                </Box>
                <Image
                    src={post.image}
                    alt={post.title}
                    borderRadius='lg'
                    objectFit='cover'
                    maxH={216}
                />
                <CardBody>
                    <Heading size='md'>{post.title}</Heading>
                </CardBody>
            </Card>
        </Link>
    );
}
