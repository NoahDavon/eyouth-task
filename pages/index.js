import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>EBooth - Your Next Best Movie</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div class="font-extrabold text-6xl text-white mx-auto my-20 w-fit text-center">
        Who's Ready For Movie Night?
      </div>
    </div>
  )
}
