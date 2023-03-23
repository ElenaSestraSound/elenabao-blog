import { Box } from "@chakra-ui/react"

interface ILayoutProps {
    background?: string
    children: React.ReactNode
}

function Layout({ background, children }: ILayoutProps) {
    return (
        <Box bg={background}>
            <Box margin='0 auto' maxW={1240}>
                {children}
            </Box>
        </Box>
    )
}

export default Layout