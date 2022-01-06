import {useState, useEffect} from 'react'
import { MoviesFilter } from '../components/movies/MoviesFilter'
import { MoviesList } from '../components/movies/MoviesList'

export const MoviesContainer = () =>  {
    const [movies, setMovies] = useState([])

    
    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:3000/movies')
            const data = await response.json()
            setMovies(data)
        } catch(error) {
            alert(error)
        }
        
        
    }

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <div>
            <MoviesFilter />
            <MoviesList movies={movies}/>
        </div>
    )
}
