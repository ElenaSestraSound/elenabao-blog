import { PostModel } from '@/lib/types';
import { Heading, Image, Text } from '@chakra-ui/react';
import { PortableText } from '@portabletext/react';
import * as React from 'react';
import client from '../../../client';
import * as styles from './styles'
import imageUrlBuilder from '@sanity/image-url'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism"

export interface IFeedItemProps {
    post: PostModel
}

function urlFor(source: string) {
    return imageUrlBuilder(client).image(source)
}

const ptComponents = {
    types: {
        image: ({ value }: any) => {
            if (!value?.asset?._ref) {
                return null
            }
            return (
                <Image
                    alt={value.alt || ' '}
                    loading="lazy"
                    src={urlFor(value).width(320).height(240).fit('max').auto('format').toString()}
                />
            )
        },
        code: ({ value }: any) => {
            console.log(value)
            return (<SyntaxHighlighter language={value.language} style={atomDark}>
                {value.code}
            </SyntaxHighlighter>)
        }
    }
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
