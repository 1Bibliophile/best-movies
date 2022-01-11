export const MovieForm = () => {
    return (
        <div>
            <form>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />

                <label htmlFor="date">Date</label>
                <input type="text" name="date" id="date" />

                <label htmlFor="image">Image</label>
                <input type="text" name="image" id="image" />

                <label htmlFor="mpaa">MPAA Rating</label>
                <input type="text" name="rated" id="rated" />

                <label htmlFor="rating">Movie Rating</label>
                <input type="text" name="rating" id="rating" />
            </form>
        </div>
    )
}
