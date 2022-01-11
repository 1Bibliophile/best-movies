import {useState, useEffect} from 'react'
import { MoviesFilter } from '../components/movies/MoviesFilter'
import { MoviesList } from '../components/movies/MoviesList'

export const MoviesContainer = () =>  {
    const [movies, setMovies] = useState([])

    const [filteredMovies, setFilteredMovies] = useState(movies)

    
    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:3000/movies')
            const data = await response.json()
            setMovies(data)
            setFilteredMovies(data)
        } catch(error) {
            alert(error)
        }
        
        
    }

    useEffect(() => {
        fetchData()
    }, [])

    const handleSearch = (searchValue) => {
        
        const filteredMovies = movies.filter(movie => 
            movie.name.toLowerCase().includes(searchValue.toLowerCase()));
            
        setFilteredMovies(filteredMovies)
        
    }

    return (
        <div>
            <MoviesFilter handleSearch={handleSearch}/>
            <MoviesList movies={filteredMovies}/>
        </div>
    )
}
