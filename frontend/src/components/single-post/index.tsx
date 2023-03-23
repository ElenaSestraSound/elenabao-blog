import { PostModel } from '@/lib/types';
import { Heading, Image, Text } from '@chakra-ui/react';
import { PortableText } from '@portabletext/react';
import * as styles from './styles'
import { ptComponents } from '../design-system/pocket-text-components';

export interface IFeedItemProps {
    post: PostModel
}


export default function SinglePost({ post }: IFeedItemProps) {
    return (<>
        <Image src={post.image} alt={post.title} borderRadius='lg' />
        <Heading>{post.title}</Heading>
        <Text>{post.date}</Text>
        <PortableText
            value={post.content}
            components={ptComponents}
        />
    </>
    );
}
