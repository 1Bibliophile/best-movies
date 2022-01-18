import { useState } from "react"

export const MoviesFilter = ({handleSearch}) => {
    const [search, setSearch] = useState("")
    
    const handleChange = e => {
        setSearch(e.target.value)
        handleSearch(search)
    }

    return (
        <div className="filter">
            <input type="text" placeholder="Enter a movie..."
             value={search} onChange={handleChange}/>
        </div>
    )
}
