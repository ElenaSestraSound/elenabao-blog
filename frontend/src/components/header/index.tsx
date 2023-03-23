import { Box, Flex, Heading, Spacer } from "@chakra-ui/react"
import Layout from "@/components/design-system/layout"
import NavMenu from "../design-system/navmenu"

function Header() {
    return (
        <Layout>
            <Flex p='10px'>
                <Box>
                    <Heading as='h1'>Elena Bao</Heading>
                </Box>
                <Spacer />
                <NavMenu />
            </Flex>
        </Layout>
    )
}

export default Header