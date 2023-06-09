import Layout from '@/components/design-system/layout';
import { Box, Button, Input, Spinner, Text } from '@chakra-ui/react';
import { FormEvent, useEffect, useState } from 'react';
import { getAllPosts } from '@/lib/utils'
import Feed from '../posts/feed';
import { PostModel } from '@/lib/types';
import useHttp from '@/hooks/use-http';


export default function Search() {
    const [isSearched, setIsSearched] = useState(false)
    const [searchValue, setSearchValue] = useState("")
    const [searchResult, setSearchResult] = useState<PostModel[]>([])
    const searchOnChange = (event: React.FormEvent<HTMLInputElement>) => {
        setSearchValue(event.currentTarget.value)
    }

    const { isLoading, hasError, sendRequest } = useHttp()
    const fetchPosts = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        sendRequest({
            url: '/api/search',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(searchValue)
        },
            (posts: PostModel[]) => {
                setSearchResult(posts)
                setIsSearched(true)
            })
    }

    return (
        <form onSubmit={fetchPosts}>
            <Box textAlign='center' mb='40px'>
                <Input
                    w='50%'
                    minW='200px'
                    backgroundColor='brand.backgroundTerciary'
                    onChange={searchOnChange}
                    placeholder='Type here...' />
                <Button
                    type='submit'
                    ml='10px'
                    verticalAlign='baseline'
                    color='brand.textTerciary'
                    bgColor='brand.accent'>
                    Search</Button>
            </Box>
            {hasError && <Text color='red' textAlign='center' fontWeight={600}>{hasError}</Text>}
            <Box maxW='900px' m='0 auto'>
                {isLoading && <Box w='fit-content' m='0 auto'><Spinner color='brand.highlight' /></Box>}
                {searchResult.length <= 0 && isSearched ?
                    <Text textAlign='center' fontWeight={600} color='brand.textSecondary'>
                        Unable to find posts with these search parameters
                    </Text> :
                    <Feed posts={searchResult} />
                }
            </Box>
        </form>
    );
}

