import { PostModel } from '@/lib/types';
import { Box, Card, CardBody, Flex, Heading, Image, Spacer, Text } from '@chakra-ui/react';
import { PortableText } from '@portabletext/react';
import * as styles from './styles'
import { ptComponents } from '../design-system/portable-text-components';
import parseOutline from './parseOutline';
import TableOfContents from './TableOfContents';
import PostHeader from './post-header';
import { slideInBottom } from '../design-system/animations';

export interface IFeedItemProps {
    post: PostModel
}


export default function SinglePost({ post }: IFeedItemProps) {
    const outline = post.content ? parseOutline(post.content) : []
    return (
        <Card css={slideInBottom}>
            <CardBody>
                <PostHeader
                    image={post.image}
                    title={post.title}
                    date={post.date}
                    categories={post.categories} />
                <TableOfContents outline={outline} />
                <Box css={styles.postContent}>
                    <PortableText
                        value={post.content}
                        components={ptComponents}
                    />
                </Box>
            </CardBody>
        </Card>
    );
}
