import Layout from '@/components/design-system/layout'
import Footer from '@/components/footer'
import Header from '@/components/header'
import '@/styles/globals.css'
import { ChakraProvider, Flex, extendTheme } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

export const lightColors = {
  brand: {
    'highlight': '#A4031F',
    'accent': '#FA8C0F ',
    'textPrimary': '#070707',
    'textSecondary': '#7D8491',
    'textTerciary': '#FFF',
    'backgroundPrimary': '#070707',
    'backgroundSecondary': '#f5f0f6ff',
    'backgroundTerciary': '#fff'
  },
  tag: {
    'Redux': '#FA8C0F',
    'React': '#19A7CE',
    'Nextjs': '#A4031F'
  }
}

const theme = extendTheme({ colors: lightColors })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout background='brand.backgroundSecondary'>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}
