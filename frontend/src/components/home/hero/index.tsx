import { Box, Flex, Heading, Text } from "@chakra-ui/react"
import * as styles from './styles'

function Hero() {
    return (
        <Box css={styles.heroContent}>
            <Box>
                <Heading as='h1' size={['xl', '3xl']}>IT'S MANTAINABLE</Heading>
                <Heading as='h1' size={['xl', '3xl']}>IT'S READABLE</Heading>
                <Heading as='h1' size={['xl', '3xl']}>IT WORKS</Heading>
            </Box>
        </Box>
    )
}

export default Hero