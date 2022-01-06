import { NavLink } from "react-router-dom"

const style = {
    width: "60%",
    margin: "5% 0 1%",
    padding: "1em",
    textDecoration: "none",
    color: "black",
    backgroundColor: "rgb(255, 203, 5)",
    fontWeight: "bold",
    verticalAlign: "center"
}

export const Navbar = () =>  {
    return (
        <div>
            <NavLink
                activeStyle={{
                    fontWeight: "bolder",
                    color: "red"
                }}
                exact
                style={style}
                to="/ "
            >
                Home
            </NavLink>

            <NavLink
                activeStyle={{
                    fontWeight: "bolder",
                    color: "red"
                }}
                exact
                style={style}
                to="/movies"
            >
                Movies
            </NavLink>

            <NavLink
                activeStyle={{
                    fontWeight: "bolder",
                    color: "red"
                }}
                exact
                style={style}
                to="/movies/new"
            >
                New Movies
            </NavLink>

            <NavLink
                activeStyle={{
                    fontWeight: "bolder",
                    color: "red"
                }}
                exact
                style={style}
                to="/about"
            >
                About
            </NavLink>
            
        </div>
    )
}
