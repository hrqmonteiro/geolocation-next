import '../styles/globals.css'
import Header from '../components/ui/Header'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>OCTUPUS</title>
      </Head>

      <div>
        <Header />
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
