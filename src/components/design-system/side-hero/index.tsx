import { AuthorModel } from '@/lib/types';
import { LinkIcon } from '@chakra-ui/icons';
import { Box, Card, CardBody, Heading, Image, Link, Text } from '@chakra-ui/react';
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
                <Heading>{author.name}</Heading>
                <Text>{author.description}</Text>
                {author.url && <Link href={author.url}><LinkIcon />{author.url}</Link>}
            </CardBody>
        </Card>
    );
}
