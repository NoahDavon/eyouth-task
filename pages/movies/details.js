import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import MovieCard from '../../components/MovieCard';
import { keys } from '../../keys';

function MovieDetails() {
    const [movie, setMovie] = useState();
    const [recommendations, setRecommendations] = useState([]);
    const router = useRouter();
    useEffect(()=>
    {
        if(!router.isReady) return;
        const movieID = router.query.id;
        fetch("https://api.themoviedb.org/3/movie/" + movieID + "?api_key=" + keys.tmdb).then(response => response.json()).then(movie => setMovie(movie));
        fetch("https://api.themoviedb.org/3/movie/" + movieID + "/recommendations?api_key=" + keys.tmdb).then(response => response.json()).then(results => setRecommendations(results.results));
    },[router.isReady, router.query])
    return ( 
    <div className='text-white flex flex-col p-10'>
        <div className='flex flex-col md:flex-row md:gap-20 w-5/6 mx-auto'>
            {movie? <MovieCard movie={movie}/> : <div></div>}
            <div className='w-3/4 md:w-1/2 flex flex-col justify-end gap-5 mt-20'>
                <div>
                    {movie?.genres.slice(0,-1).map(genre => genre.name + ", ")}
                    {movie?.genres[movie.genres.length-1].name + "."}
                </div>
                <div>
                    {"Released: " + movie?.release_date}
                </div>
                <div>
                    {"Runtime: " + movie?.runtime + ' Minutes'}
                </div>
                <div className='font-bold'>
                    {movie?.tagline}
                </div>
                <div>
                    {movie?.overview}
                </div>
            </div>
        </div>
        <div className='font-bold mt-20'>
            You may also like:
        </div> 
        <div className='flex overflow-scroll mt-10 gap-8'>
            {recommendations?.slice(0,10).map(movie => <MovieCard key={movie.id} movie={movie}/>)}
        </div>
    </div> 
    );
}

export default MovieDetails;