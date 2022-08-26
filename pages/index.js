import Link from 'next/link'
import React, { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';

export default function Home() {
  const [recommendations, setRecommendations] = useState([]);
  useEffect(()=>
  {
    fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=59ac30d7a25d364bedaee9f99cd0fb37").then(response => response.json()).then(results => setRecommendations(results.results));
  }, [])
  return (
    <div className='p-10'>
      <div className="flex flex-col text-white mx-auto my-20 w-fit text-center">
        <div className="font-extrabold text-6xl">
          {"Who's Ready For Movie Night?"}    
        </div>
      </div>
      <div className='flex overflow-scroll mt-10 gap-8 p-10'>
            {recommendations?.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
      </div>
      <div className='flex flex-col md:w-3/4 mx-auto p-10 mt-10 justify-center rounded-xl bg-violet-900'>
        <div className='text-center font-bold mb-10'>
          Login
        </div>
        <form className='flex flex-col justify-center w-3/4 gap-4 mx-auto text-gray-800'>
          <input type="email" placeholder='E-mail'/>
          <input type="password" placeholder='Password'/>
          <button type='submit' className='bg-indigo-800 text-white hover:bg-indigo-700 p-4 rounded'>Login</button>
        </form>
        <div className='text-center font-bold my-10'>
          Register
        </div>
        <form className='flex flex-col justify-center w-3/4 gap-4 mx-auto text-gray-800'>
          <input type="email" placeholder='E-mail'/>
          <input type="password" placeholder='Password'/>
          <input type="password" placeholder='Repeat password'/>
          <button type='submit' className='bg-indigo-800 text-white hover:bg-indigo-700 p-4 rounded'>Sign up</button>
        </form>
      </div>
    </div>
  )
}
function MainButton({href, children}) {
  return <Link href={href} passHref>
    <a className="bg-blue-700 rounded-xl w-fit px-6 py-2 mx-auto mt-6 hover:bg-blue-500">{children}</a>
  </Link>
}

