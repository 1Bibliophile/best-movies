export const MovieCard = ({movie}) => {
    
    return (
        <div className="movie-card">
            <h3 id="name-date">{`${movie.name} (${movie.date})`}</h3>
            <h4>{`Rated: ${movie.rated}  •  Rating: ${movie.rating}`}</h4>
            <img src={movie.image} alt={`${movie.name} from ${movie.date}`}/>
        </div>
    )
}
