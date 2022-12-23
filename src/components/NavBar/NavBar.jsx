import './NavBar.modules.css';
import { NavLink } from "react-router-dom"

export const NavBar = () => {
  let activeStyle = {
    textDecoration: "underline",
  };

  let activeClassName = "underline";
  return (
    <>
        <nav className="container-1">
            <ul>
                <li><NavLink className="textD" to="/"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >Inicio</NavLink></li>

            <li><NavLink className="textD" to="proyectos"
            style={({ isActive }) =>
            isActive ? activeStyle : undefined
          }
            >Tecnologías Y Habilidades</NavLink></li>

            <li><NavLink className="textD" to="tyh"
            style={({ isActive }) =>
            isActive ? activeStyle : undefined
          }
            >Proyectos</NavLink></li>

                <li><NavLink className="textD" to="/contacto"
                style={({ isActive }) =>
                isActive ? activeStyle : undefined
              }
                >Contacto</NavLink></li>
            </ul>
        </nav>
    </>
  )
}
