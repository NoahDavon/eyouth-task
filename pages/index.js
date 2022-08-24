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
      <div class="flex flex-col text-white mx-auto my-20 w-fit text-center">
        <div class="font-extrabold text-6xl">
          Who's Ready For Movie Night?      
        </div>
        <Link href="#" passHref>
        <a class="bg-blue-700 rounded-xl w-fit px-6 py-2 mx-auto mt-6 hover:bg-blue-500">Playing Now</a>
        </Link>
        <Link href="#" passHref>
        <a class="bg-blue-700 rounded-xl w-fit px-6 py-2 mx-auto mt-6 hover:bg-blue-500">Most Popular</a>
        </Link>
        
      </div>
    </div>
  )
}
