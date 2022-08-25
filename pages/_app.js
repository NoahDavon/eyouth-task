import Navbar from '../components/Navbar'
import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
    <div className='bg-gradient-to-b from-gray-900 to-violet-800 min-h-screen'>
      <Head>
        <title>EBooth - Your Next Best Movie</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Component {...pageProps} />
    </div>
    
  ) 
}

export default MyApp
