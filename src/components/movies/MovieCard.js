export const MovieCard = ({movie}) => {
    
    return (
        <div className="movie-card">
            <h3>{`${movie.name} (${movie.date})`}</h3>
            <h5>{`Rating: ${movie.rating}`}</h5>
            <img src={movie.image} alt={`${movie.name} from ${movie.date}`}/>
        </div>
    )
}
