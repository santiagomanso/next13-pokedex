import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Navbar from '@/components/Navbar'

import Footer from '@/components/Footer'
import Layout from '@/components/Layout'

library.add(fas)

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Footer />
    </>
  )
}
