import { useState } from "react"

export const MovieForm = () => {
    
    const [name, setName] = useState("")
    const [date, setDate] = useState("")
    const [image, setImage] = useState("")
    const [rated, setRated] = useState("")
    const [rating, setRating] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()


    }
    
    
    return (
        <div>
            <form className="movie-form"
             onSubmit={handleSubmit}>
                <label htmlFor="name">Name: </label>
                <input onChange={e => setName(e.target.value)} 
                 type="text" 
                name="name" id="name" value={name}/><br />

                <label htmlFor="date">Date: </label>
                <input onChange={e => setDate(e.target.value)} type="text" 
                name="date" id="date" value={date}/><br />

                <label htmlFor="image">Image: </label>
                <input onChange={e => setImage(e.target.value)}type="text" 
                name="image" id="image" value={image}/><br />

                <label htmlFor="mpaa">MPAA Rating: </label>
                <input onChange={e => setRated(e.target.value)} type="text" 
                name="rated" id="rated" value={rated}/><br />

                <label htmlFor="rating">Movie Rating: </label>
                <input onChange={e => setRating(e.target.value)} type="text" 
                name="rating" id="rating" value={rating}/><br />
            </form>
        </div>
    )
}
