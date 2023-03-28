import { Box, Flex, Heading, Image, Spacer } from "@chakra-ui/react"
import Layout from "@/components/design-system/layout"
import NavMenu from "../design-system/navmenu"
import Link from "next/link"

function Header() {
    return (
        <Layout background='brand.backgroundTerciary'>
            <Flex align='center'>
                <Link href='/'>
                    <Flex align='center'>
                        <Image src="/home/bao.png" alt="Elena Bao's picture" borderRadius='full' boxSize='50px' mr='20px' />
                        <Heading as='h1'>Elena Bao</Heading>
                    </Flex>
                </Link>
                <Spacer />
                <NavMenu />
            </Flex>
        </Layout>
    )
}

export default Header