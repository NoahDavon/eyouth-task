import Navbar from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
    <div className='bg-gradient-to-b from-gray-900 to-indigo-800 h-screen'>
      <Navbar/>
      <Component {...pageProps} />
    </div>
    
  ) 
}

export default MyApp
