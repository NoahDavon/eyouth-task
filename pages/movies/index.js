import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { keys } from '../../keys';
function Movies() 
{
    var query;
    const router = useRouter();
    const [movies, setMovies] = useState([])
    useEffect(() =>
    {
        if(!router.isReady) return;
        query = router.query;
        getMovies(query, setMovies)
    }, [router.isReady, router.query])
    return ( 
        <div>

        </div>
     );
}

async function getMovies(query, setMovies)
{
    
    var requestString = "https://api.themoviedb.org/3/movie/"
    let {src, ...requestQuery} = query;
    switch(src)
    {
        case "latest":
            requestString +="latest/";
            break;
        case "top":
            requestString +="top_rated/"
            break;
        case "playing":
            requestString +="now_playing/"
            break;
        case "upcoming":
            requestString +="upcoming/"
            break;
        case "popular":
            requestString += "popular/"
            break;
        default:
            throw new error;
    }
    const requestURL = new URL(requestString);
    requestURL.searchParams.append("api_key", keys.tmdb);
    Object.keys(requestQuery).forEach(param => requestURL.searchParams.append(param, requestQuery[param]));
    const response = await fetch(requestURL.toString()).then(res => res.json());
    console.log(response);

}

export default Movies;