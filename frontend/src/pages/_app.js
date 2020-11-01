import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import Layout from '../components/Layout'
import GlobalStyles from '../css-utils/global'
import theme from '../css-utils/theme'

function OnlineApp ({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Ameca Online</title>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Layout>
          <Component {...pageProps} ></Component>
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default OnlineApp