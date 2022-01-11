import { MovieCard } from "./MovieCard"

export const MoviesList = ({movies}) => {
    const moviesCards = movies.map(movie => 
        <MovieCard key={movie.id} movie={movie}/>)
    
    return (
        <div id="movies-list">
            {moviesCards}
        </div>
    )
}
