import { Box, Flex } from '@chakra-ui/react';
import * as React from 'react';
import Layout from '..';
import { sideLayout } from './styles';

export interface ISideLayoutProps {
    children: React.ReactNode,
    background?: string
}

export default function SideLayout({ children, background }: ISideLayoutProps) {
    const arrayChildren = React.Children.toArray(children)
    return (
        <Layout background={background}>
            <Flex css={sideLayout}>
                <Box w='70%'>
                    {arrayChildren[0]}
                </Box>
                <Box w='30%'>
                    {arrayChildren[1]}
                </Box>
            </Flex>
        </Layout>
    );
}
