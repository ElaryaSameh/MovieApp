import React, { useContext } from "react";
import { Logout } from "../../Services/Auth"; // Adjust the import path as necessary
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { themContext } from "../../context/them";
import { authContext } from "../../context/auth";
import { FaSun, FaMoon } from "react-icons/fa";

function Header() {
const { them, setThem } = useContext(themContext);
const { isAuth } = useContext(authContext);

const navigate = useNavigate();

const handleLogout = async () => {
    await Logout();
    localStorage.removeItem("token"); 
    navigate("/Login");
}

return (
<Navbar expand="lg" className={`navbar shadow-sm ${them==="light" ? "bg-light" : "bg-dark" }`}>
    <Container>
        <Navbar.Brand href="/" className={`fw-bold text-uppercase ${them==="light" ? "text-dark" : "text-danger" }`}>
            MovieApp
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex align-items-center">

                <NavLink to="/" className={({ isActive })=>
                    `nav-link mx-3 fw-bold ${isActive ? "text-danger" : them === "light" ? "text-dark" : "text-light"}`
                    }
                    >
                    Home
                </NavLink>

                <NavLink to="/MoviesList" className={({ isActive })=>
                    `nav-link mx-3 fw-bold ${isActive ? "text-danger" : them === "light" ? "text-dark" : "text-light"}`
                    }
                    >
                    Movies List
                </NavLink>

                {isAuth?
                <NavLink to="/SignUp" className={({ isActive })=>
                    `nav-link mx-3 fw-bold ${isActive ? "text-danger" : them === "light" ? "text-dark" : "text-light"}`
                    }
                    onClick={handleLogout}
                    >
                    Logout
                </NavLink>: <>
                    <NavLink to="/Login" className={({ isActive })=>
                        `nav-link mx-3 fw-bold ${isActive ? "text-danger" : them === "light" ? "text-dark" :
                        "text-light"}`
                        }
                        >
                        Login
                    </NavLink>,
                    <NavLink to="/SignUp" className={({ isActive })=>
                        `nav-link mx-3 fw-bold ${isActive ? "text-danger" : them === "light" ? "text-dark" :
                        "text-light"}`
                        }
                        >
                        Sign Up
                    </NavLink>

                </>

                }

                <NavLink to="/Products" className={({ isActive })=>
                    `nav-link mx-3 fw-bold ${isActive ? "text-danger" : them === "light" ? "text-dark" : "text-light"}`
                    }
                    >
                    Products
                </NavLink>

                <button onClick={()=> setThem(them === "light" ? "dark" : "light")}
                    className="btn btn-link border-0 ms-3 fs-4"
                    style={{ color: them === "light" ? "#000" : "#fff" }}
                    >
                    {them === "light" ?
                    <FaMoon /> :
                    <FaSun />}
                </button>
            </Nav>
        </Navbar.Collapse>
    </Container>

    <style>
        {
          `.nav-link {
            text-decoration: none !important;
            font-size: 1.1rem;
            transition: color 0.3s ease-in-out;
            color: black; 
        
        .nav-link:hover,
        .nav-link:active {
            color: rgb(236, 61, 45) !important; 
        }`
        
        }
    </style>
</Navbar>
);
}

export default Header;