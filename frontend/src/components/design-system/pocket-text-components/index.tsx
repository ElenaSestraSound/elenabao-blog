import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism"
import { Image } from "@chakra-ui/react"
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
        }
    }
}

function urlFor(source: string) {
    return imageUrlBuilder(client).image(source)
}