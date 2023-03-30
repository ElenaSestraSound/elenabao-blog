import { PostModel } from '@/lib/types';
import { Box, Heading, Image, Text } from '@chakra-ui/react';
import { PortableText } from '@portabletext/react';
import * as styles from './styles'
import { ptComponents } from '../design-system/pocket-text-components';

export interface IFeedItemProps {
    post: PostModel
}


export default function SinglePost({ post }: IFeedItemProps) {
    return (<>
        <Image src={post.image} alt={post.title} borderRadius='lg' mb='20px' />
        <Heading color='brand.textPrimary'>{post.title}</Heading>
        <Text fontSize='md' color='brand.accent' mb='10px' p='0 5px;'>{post.date}</Text>
        <Box css={styles.postContent}>
            <PortableText
                value={post.content}
                components={ptComponents}
            />
        </Box>
    </>
    );
}
