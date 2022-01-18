import { NavLink } from "react-router-dom"

const style = {
    width: "70%",
    //margin: "5% 0 1%",
    padding: "2em",
    textDecoration: "none",
    color: "white",
    backgroundColor: "darkblue",
    fontWeight: "bold",
    verticalAlign: "center"
}

export const Navbar = () =>  {
    return (
        <div className="nav">
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
