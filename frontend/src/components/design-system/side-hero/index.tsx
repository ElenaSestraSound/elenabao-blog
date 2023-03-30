import { AuthorModel } from '@/lib/types';
import { LinkIcon } from '@chakra-ui/icons';
import { Box, Card, CardBody, Heading, Image, Link, Spacer, Text } from '@chakra-ui/react';
import { PortableText } from '@portabletext/react';
import * as React from 'react';
import * as styles from './styles'

export interface ISideHeroProps {
    author: AuthorModel
}

export default function SideHero({ author }: ISideHeroProps) {
    return (
        <Card variant='elevated' css={styles.sideHero}>
            <CardBody>
                <Image src={author.image} alt="Elena Bao's picture" borderRadius='full' boxSize='150px' css={styles.sideHeroImage} />
                <Box>
                    <Heading>{author.name}</Heading>
                    <PortableText value={author.description} />
                    {author.url && <Link href={author.url}><LinkIcon />{author.url}</Link>}
                </Box>
            </CardBody>
        </Card>
    );
}
