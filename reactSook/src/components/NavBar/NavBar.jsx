import styles from "./navbar.css"
import CartWidget from "../CartWidget/CartWidget"
import {NavLink,} from  "react-router-dom"

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-md ">
            <div className="container-fluid">
                <NavLink className="brand" to="/">Sook</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body justify-content-md-end">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="categoria/buzos">Buzos</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="categoria/gorras">Gorras</NavLink>
                    </li>
                    </ul>
                    <CartWidget/>
                </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
