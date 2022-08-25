import React, {useState, useRef} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Link from 'next/link';
import { Menu, MenuItem, MenuList } from '@mui/material';
export default function Navbar() {
  const [query,setQuery] = useState("");
  const [anchor, setAnchor] = useState(null);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="relative">
        <Toolbar className="flex flex-row justify-between bg-violet-900 w-full items-center">
          <div className="relative w-1/4">
            <div className="my-2 flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
            </div>
            <input type="text" onChange={e => setQuery(e.target.value)} className="my-2 mx-2 bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search"/>
          </div>
          <Link href={"/movies/?src=search&query=" + query} passHref>
            <a className="my-2 p-2.5 ml-4 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              <span className="sr-only">Search</span>
            </a>
          </Link>
          <div className='flex-grow text-center font-extrabold'><Link href="/" passHref><a>EBooth</a></Link></div>
          <div className='hidden xl:flex gap-4 mx-auto'>
          <MainButton href="/movies/?src=playing">Now Playing</MainButton>
          <MainButton href="/movies/?src=popular">Most Popular</MainButton>
          <MainButton href="/movies/?src=top">Top Rated</MainButton>
          <MainButton href="/movies/?src=upcoming">Upcoming</MainButton>
          </div>
          <button className='xl:hidden space-y-2' onClick={e =>setAnchor(e.target)}>
            <div className="w-8 h-0.5 bg-violet-600"></div>
            <div className="w-8 h-0.5 bg-violet-600"></div>
            <div className="w-8 h-0.5 bg-violet-600"></div>
          </button>
            <Menu anchorEl={anchor} open={anchor} onClose={()=> setAnchor(null)}>
              <MenuItem><MainButton href="/movies/?src=playing">Now Playing</MainButton></MenuItem>
              <MenuItem><MainButton href="/movies/?src=popular">Most Popular</MainButton></MenuItem>
              <MenuItem><MainButton href="/movies/?src=top">Top Rated</MainButton></MenuItem>
              <MenuItem><MainButton href="/movies/?src=upcoming">Upcoming</MainButton></MenuItem>
            </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

function MainButton({href, children}) {
  return <Link href={href} passHref>
    <a className="bg-blue-700 rounded-xl w-fit px-6 py-2 mx-auto hover:bg-blue-500">{children}</a>
  </Link>
}