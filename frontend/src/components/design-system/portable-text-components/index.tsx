import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { nightOwl as codeTheme } from "react-syntax-highlighter/dist/cjs/styles/prism"
import { Heading, Image, Text } from "@chakra-ui/react"
import imageUrlBuilder from '@sanity/image-url'
import client from "../../../../client"
import { getId } from "@/components/single-post/parseOutline"

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
            return (<SyntaxHighlighter language={value.language} style={codeTheme} customStyle={{ marginBottom: '20px' }}>
                {value.code}
            </SyntaxHighlighter>)
        },
    },
    block: {
        h1: ({ children, value }: any) => {
            const id = getId(value)
            return (<Heading as='h1' fontSize='3xl' id={id}>{children[0]}</Heading>)
        },
        h2: ({ children, value }: any) => {
            const id = getId(value)
            return (<Heading as='h2' fontSize='2xl' id={id}>{children[0]}</Heading>)
        },
        h3: ({ children, value }: any) => {
            const id = getId(value)
            return (<Heading as='h3' fontSize='xl' id={id}>{children[0]}</Heading>)
        },
        h4: ({ children, value }: any) => {
            const id = getId(value)
            return (<Heading as='h4' fontSize='lg' id={id}>{children[0]}</Heading>)
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