import { Box, Flex, Heading, Image, Spacer, Tag, Text } from '@chakra-ui/react';
import * as React from 'react';
import { postHeader } from './styles';

export interface IPostHeaderProps {
    image: string,
    title: string,
    date: string,
    categories: string[]
}

export default function PostHeader({ image, title, date, categories }: IPostHeaderProps) {
    return (
        <Box mb='20px' >
            <Image src={image} alt={title} borderRadius='lg' mb='20px' />
            <Flex align='baseline' mb='10px' css={postHeader}>
                <Heading color='brand.textPrimary' maxW='70%'>{title}</Heading>
                <Spacer />
                <Text fontSize='md' color='brand.accent' mb='10px'>{date}</Text>
            </Flex>
            <Box>
                {categories.map(category => <Tag
                    mr='10px;'
                    key={category}
                    color='brand.textTerciary'
                    background={`tag.${category}`}>{category}</Tag>)}
            </Box>
        </Box >
    );
}
