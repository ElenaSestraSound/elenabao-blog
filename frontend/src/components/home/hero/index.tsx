import { slideInRight } from "@/components/design-system/animations"
import { Box, Heading } from "@chakra-ui/react"
import { heroContent } from "./styles"

function Hero() {
    return (
        <Box css={[heroContent, slideInRight]}>
            <Box>
                <Heading as='h1' size={['xl', '3xl']}>IT&aposS MANTAINABLE</Heading>
                <Heading as='h1' size={['xl', '3xl']}>IT&aposS READABLE</Heading>
                <Heading as='h1' size={['xl', '3xl']}>IT WORKS</Heading>
            </Box>
        </Box>
    )
}

export default Hero