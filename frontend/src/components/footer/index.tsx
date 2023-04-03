import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Layout from "../design-system/layout";

export default function Footer() {
    return (
        <Layout background="brand.accent">
            <Box textAlign='center' w='fit-content' m='0 auto'>
                <Flex align='center'>
                    <Image src="/home/bao.png" alt="Elena Bao's picture" borderRadius='full' boxSize='50px' mr='20px' />
                    <Heading as='h1' color='brand.textTerciary'>Elena Bao</Heading>
                </Flex>
                <Text fontSize={['md', 'xl']} fontWeight='600' color='brand.textTerciary'>
                    Copyright © 2023 Elena Bañón
                </Text>
            </Box>
        </Layout>
    );
}
