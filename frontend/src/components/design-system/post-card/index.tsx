import { PostModel } from '@/lib/types';
import { Card, Heading, CardBody, Box, Image, Tag, Link, Text } from '@chakra-ui/react';
import * as React from 'react';
import * as styles from './styles'

export interface IPostCardProps {
    post: PostModel
}

export default function PostCard({ post }: IPostCardProps) {
    const date = new Date(post.date)
    return (
        <Link href={`/blog/${post.slug}`} css={styles.card} _hover={{ 'textDecoration': 'none' }}>
            <Card maxW='sm' align='center'>
                <Box>
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
                </Box>
                <CardBody>
                    <Heading _hover={{ 'color': 'brand.highlight' }} size='md' color='brand.textPrimary' mb='5px' textAlign='left'>{post.title}</Heading>
                    <Text fontSize='xs' color='brand.accent' mb='10px' textAlign='left'>{`${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`}</Text>
                    {post.excerpt && <Text fontSize='sm' color='brand.textSecondary' textAlign='left'>{post.excerpt}</Text>}
                </CardBody>
            </Card>
        </Link>
    );
}
