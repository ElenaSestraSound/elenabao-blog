import { Box, Flex, Heading, Image, Spacer } from "@chakra-ui/react"
import Layout from "@/components/design-system/layout"
import NavMenu from "../design-system/navmenu"
import Link from "next/link"
import { container, header, hiddenHeader, sticky } from "./styles"
import { useEffect, useState } from "react"

function Header() {
    const [y, setY] = useState<undefined | number>(undefined);
    const [showDesktopHeader, setShowDesktopHeader] = useState(true);
    useEffect(() => {
        const handleScroll = () => {
            if (y) {
                setShowDesktopHeader(y > window.scrollY);
            }
            setY(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [y]);
    return (
        <>
            <Box bg='brand.accent' css={showDesktopHeader ? sticky : hiddenHeader}>
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
            <Box css={container} bgColor='brand.backgroundSecondary'>
            </Box>
        </>
    )
}

export default Header