import { ptComponents } from '@/components/design-system/pocket-text-components';
import { PostModel } from '@/lib/types';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Card, CardBody, Heading, Image, Link, Text } from '@chakra-ui/react';
import { PortableText } from '@portabletext/react';
import * as React from 'react';
import * as styles from './styles'

export interface IFeedItemProps {
    post: PostModel
}

export default function FeedItem({ post }: IFeedItemProps) {
    return (
        <Card variant='elevated' css={styles.feedItem}>
            <CardBody>
                <Image src={post.image} alt={post.title} borderRadius='lg' />
                <Heading>{post.title}</Heading>
                <Text>{post.date}</Text>
                <PortableText
                    value={post.content}
                    components={ptComponents}
                />
                <Link href={`/blog/${post.slug}`}>Read more... <ArrowForwardIcon /></Link>
            </CardBody>
        </Card>
    );
}
