import { PostModel } from '@/lib/types';
import { Card, Heading, CardBody, Box, Image, Tag, Link, Text } from '@chakra-ui/react';
import * as React from 'react';
import * as styles from './styles'

export interface IPostCardProps {
    post: PostModel
}

export default function PostCard({ post }: IPostCardProps) {
    return (
        <Link href={`/blog/${post.slug}`} css={styles.card} _hover={{ 'textDecoration': 'none' }}>
            <Card maxW='sm' align='center'>
                <Box css={styles.postCardTags}>
                    {post.categories.map(category => <Tag
                        m='0 5px;'
                        key={category}
                        color='brand.textTerciary'
                        background={`tag.${category}`}>{category}</Tag>)}
                </Box>
                <Image
                    src={post.image}
                    alt={post.title}
                    borderRadius='lg'
                    objectFit='cover'
                    maxH={216}
                />
                <CardBody>
                    <Heading _hover={{ 'color': 'brand.highlight' }} size='md' color='brand.textPrimary' mb='10px'>{post.title}</Heading>
                    {post.excerpt && <Text fontSize='sm' color='brand.textSecondary' textAlign='left'>{post.excerpt}</Text>}
                </CardBody>
            </Card>
        </Link>
    );
}
