import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { keys } from '../../keys';
import { Pagination } from '@mui/material';
import MovieCard from '../../components/MovieCard';
function Movies() 
{
    var query;
    const router = useRouter();
    const [movies, setMovies] = useState([])
    const [page, setPage] = useState(1);
    const [pageCount, setPageCount] = useState(1);
    useEffect(() =>
    {
        if(!router.isReady) return;
        query = router.query;
        query.page = page;
        getMovies(query).then(response => 
            {
                setMovies(response.results)
                setPageCount(response.total_pages);
            });
    }, [router.isReady, router.query, page])
    return (
        <div className='w-fit mx-auto p-5'>
            <div className='grid grid-cols-4 gap-4'>
                {movies?.map(movie => <MovieCard movie={movie}/>)?? <div>No Results</div>}
            </div>
            <div className='bg-white/50 w-fit rounded-xl mx-auto mt-5 px-4 py-1'>
                <Pagination color='secondary' showLastButton count={pageCount} onChange={(_,p) => setPage(p)}/>
            </div>
            
        </div>
     );
}

async function getMovies(query)
{
    var requestString = "https://api.themoviedb.org/3/"
    let {src, ...requestQuery} = query;
    switch(src)
    {
        case "top":
            requestString +="movie/top_rated"
            break;
        case "playing":
            requestString +="movie/now_playing"
            break;
        case "upcoming":
            requestString +="movie/upcoming"
            break;
        case "popular":
            requestString += "movie/popular"
            break;
        case "search":
            requestString += "search/movie"
            break;
        default:
            throw new Error();
    }
    const requestURL = new URL(requestString);
    requestURL.searchParams.append("api_key", keys.tmdb);
    Object.keys(requestQuery).forEach(param => requestURL.searchParams.append(param, requestQuery[param]));
    console.log(requestURL.toString());
    const response = await fetch(requestURL.toString()).then(res => res.json());
    console.log(response);
    return response;

}

export default Movies;