import { useState } from "react"

export const MoviesFilter = () => {
    const [search, setSearch] = useState("")
    
    const handleChange = e => {
        setSearch(e.target.value)
    }

    return (
        <div>
            <input type="text" placeholder="Enter a movie..."
             value={search} onChange={handleChange}/>
        </div>
    )
}
