import '../styles/globals.css'
import Header from '../components/ui/Header'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>OCTUPUS</title>
      </Head>

      <Header />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
