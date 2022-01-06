export const MovieCard = ({movie}) => {
    return (
        <div className="movie-card">
            <h3>{movie.name}</h3>
            <img src={movie.image} alt={`${movie.name} from ${movie.date}`}/>
        </div>
    )
}
