import { Box } from "@chakra-ui/react"
import { SerializedStyles } from "@emotion/react"

interface ILayoutProps {
    background?: string
    children: React.ReactNode,
    css?: SerializedStyles
}

function Layout({ background, children, css }: ILayoutProps) {
    return (
        <Box bg={background} css={css}>
            <Box margin='0 auto' maxW={1240}>
                {children}
            </Box>
        </Box>
    )
}

export default Layout