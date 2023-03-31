import { PostModel } from '@/lib/types';
import { Box, Card, CardBody, Flex, Heading, Image, Spacer, Text } from '@chakra-ui/react';
import { PortableText } from '@portabletext/react';
import * as styles from './styles'
import { ptComponents } from '../design-system/portable-text-components';
import parseOutline from './parseOutline';
import TableOfContents from './TableOfContents';

export interface IFeedItemProps {
    post: PostModel
}


export default function SinglePost({ post }: IFeedItemProps) {
    const outline = parseOutline(post.content)
    return (
        <Card>
            <CardBody>
                <Image src={post.image} alt={post.title} borderRadius='lg' mb='20px' />
                <Flex align='baseline' mb='20px'>
                    <Heading color='brand.textPrimary'>{post.title}</Heading>
                    <Spacer />
                    <Text fontSize='md' color='brand.accent' mb='10px' p='0 5px;'>{post.date}</Text>
                </Flex>
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
