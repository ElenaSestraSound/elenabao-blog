import { LinkIcon } from '@chakra-ui/icons';
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, ListItem, List, Text, Link, ListIcon } from '@chakra-ui/react';
import * as React from 'react';
import { getChildrenText } from '../parseOutline';

export interface ITableOfContentsProps {
    outline: any[],
    title?: string
}

export default function TableOfContents({ outline, title = "Table of contents" }: ITableOfContentsProps) {
    if (!outline) return null
    if (outline.length <= 0) return null

    return (
        <Accordion allowMultiple bgColor='brand.backgroundSecondary' mb='20px'>
            <AccordionItem>
                <h2>
                    <AccordionButton>
                        <Box as="span" flex='1' textAlign='left'>
                            <Text color='brand.highlight' fontWeight={600} fontSize='xl'>{title}</Text>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    {outline.map((item, index) => {
                        return (
                            <List key={index}>
                                <Link href={`#${item.slug}`}
                                    fontWeight={600}
                                    fontSize='lg'
                                    _hover={{
                                        'textDecoration': 'none',
                                        'color': 'brand.highlight'
                                    }}>
                                    <ListItem key={index} p='5px 0'>
                                        <ListIcon as={LinkIcon} p='3px 0' />
                                        {getChildrenText(item)}
                                    </ListItem>
                                </Link>
                            </List>
                        )
                    })}
                </AccordionPanel>
            </AccordionItem>
            {/* <UnorderedList>
                {outline.map((item, index) => {
                    return (
                        <ListItem key={index}>
                            <Link href={`#${item.slug}`}>
                                {getChildrenText(item)}
                            </Link>
                        </ListItem>
                    )
                })}
            </UnorderedList> */}
        </Accordion>
    );
}
