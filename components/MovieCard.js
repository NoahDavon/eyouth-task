import Link from "next/link";

function MovieCard({movie}) {
    return ( 
    <div class="min-w-[250px] rounded-lg shadow-md bg-violet-900/75 border-gray-700">
        <Link href={"/movies/details/?id=" + movie.id} passHref>
        <a>
            <img class="p-8 rounded-t-lg" src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} alt={movie.title + " image"} />
        </a>
        </Link>
        <div class="px-5 pb-5 text-center">
            <Link href={"/movies/details/?" + movie.id} passHref>
                <a >
                    <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{movie.title}</h5>
                </a>
            </Link>
        </div>
    </div> 
);
}

export default MovieCard;