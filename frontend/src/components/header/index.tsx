import { Box, Flex, Heading, Image, Spacer } from "@chakra-ui/react"
import Layout from "@/components/design-system/layout"
import NavMenu from "../design-system/navmenu"
import Link from "next/link"
import { header } from "./styles"

function Header() {
    return (
        <Box bg='brand.accent'>
            <Box margin='0 auto' maxW={1240}>
                <Flex align='center' css={header}>
                    <Link href='/'>
                        <Flex align='center' ml='20px'>
                            <Image src="/home/bao.png" alt="Elena Bao's picture" borderRadius='full' boxSize='50px' mr='20px' />
                            <Heading as='h1' color='brand.textTerciary'>Elena Bao</Heading>
                        </Flex>
                    </Link>
                    <Spacer />
                    <NavMenu />
                </Flex>
            </Box>
        </Box>


    )
}

export default Header