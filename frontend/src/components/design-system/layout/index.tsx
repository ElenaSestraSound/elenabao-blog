import Footer from "@/components/footer"
import Header from "@/components/header"
import { Box } from "@chakra-ui/react"
import { SerializedStyles } from "@emotion/react"
import { layout } from "./styles"

interface ILayoutProps {
    background?: string
    children: React.ReactNode,
    css?: SerializedStyles
}

function Layout({ background, children, css }: ILayoutProps) {
    return (
        <Box bg={background} css={layout}>
            <Header />
            <Box css={css}>
                <Box margin='0 auto' maxW={1240} pt='40px' pb='40px'>
                    {children}
                </Box>
            </Box>
            <Footer />
        </Box>
    )
}

export default Layout