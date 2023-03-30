import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism"
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react"
import imageUrlBuilder from '@sanity/image-url'
import client from "../../../../client"

export const ptComponents = {
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
            return (<SyntaxHighlighter language={value.language} style={atomDark}>
                {value.code}
            </SyntaxHighlighter>)
        },
    },
    block: {
        h1: ({ children }: any) => {
            return (<Heading as='h1' fontSize='3xl'>{children[0]}</Heading>)
        },
        h2: ({ children }: any) => {
            return (<Heading as='h2' fontSize='2xl'>{children[0]}</Heading>)
        },
        h3: ({ children }: any) => {
            return (<Heading as='h3' fontSize='xl'>{children[0]}</Heading>)
        },
        h4: ({ children }: any) => {
            return (<Heading as='h4' fontSize='lg'>{children[0]}</Heading>)
        },
        blockquote: ({ children }: any) =>
            <Text
                as='cite'
                borderLeft='0.4em solid'
                borderColor='brand.accent'
                display='block'
                p='5px'
                pl='15px'
                color='brand.accent'
                bgColor='brand.backgroundSecondary'
                fontSize='xl'>{children[0]}</Text>

    }
}

function urlFor(source: string) {
    return imageUrlBuilder(client).image(source)
}