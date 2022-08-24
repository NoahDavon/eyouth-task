import { Button } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>EBooth - Your Next Best Movie</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col text-white mx-auto my-20 w-fit text-center">
        <div className="font-extrabold text-6xl">
          Who's Ready For Movie Night?      
        </div>
        <div className='flex flex-col sm:flex-row'>
          <MainButton href="/movies/?src=playing">Now Playing</MainButton>
          <MainButton href="/movies/?src=popular">Most Popular</MainButton>
          <MainButton href="/movies/?src=latest">Latest</MainButton>
          <MainButton href="/movies/?src=top">Top Rated</MainButton>
          <MainButton href="/movies/?src=upcoming">Upcoming</MainButton>
        </div>
        
      </div>
    </div>
  )
}
function MainButton({href, children}) {
  return <Link href={href} passHref>
    <a className="bg-blue-700 rounded-xl w-fit px-6 py-2 mx-auto mt-6 hover:bg-blue-500">{children}</a>
  </Link>
}

