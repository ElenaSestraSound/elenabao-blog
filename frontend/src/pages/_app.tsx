import Header from '@/components/header'
import '@/styles/globals.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

export const lightColors = {
  brand: {
    'highlight': '#19A7CE',
    'textPrimary': '#000000',
    'textSecondary': '#7D8491',
    'backgroundPrimary': '#146C94',
    'backgroundSecondary': '#000000',
    'backgroundTerciary': '#F6F1F1',
  },
}

const theme = extendTheme({ colors: lightColors })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
