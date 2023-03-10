import React, {useContext, useState} from "react";
import { Link } from "react-router-dom";
import {Context} from "../store/appContext";


// export function BotonComponente(props) {
// 	// Verifica si el componente actual es igual al componente del botón
// 	if (props.componenteActual === 'BotonComponente') {
// 	  return (
// 		<button>Botón</button>
// 	  );
// 	} else {
// 	  return null;
// 	}
//   }
  

export const Navbar = () => {
	const {store, actions} = useContext (Context);
	const [visible, setVisible] = useState (true);
	

	return (

		<nav className="navbar navbar-light bg-dark mb-3">
		
			<div className="container">
			<Link to="/home" onClick={(e) => {
				actions.removeSingleItem()
			}}>
				<img className="imagen" width="80px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/320px-Marvel_Logo.svg.png"></img>
			</Link>
			
					<div className="ml-auto">
						<div className="dropdown">
							{store.login && 
							<button className="btn btn-danger dropdown-toggle d-flex dd-items" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
								<p className="m-0 me-1">Favorites</p> 
								<div className="circulo me-1">{store.favorites.length}</div>
							</button>		
								}
							<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
					{store.favorites.map((item, index) => {
						return (
							<div key={index} className="d-flex trasH dd-items key={index}">
								<Link className="dropdown-item" to={`/single/${item.resource}/${item.uid}`}>{item.name}</Link >
								<span className="ms-1 me-1"><i className="fa-solid fa-trash-can" onClick={(e) => {
									actions.deleteFavorites(item)
								}}></i></span>
							</div>
						)
						
					})}
					</ul>
				</div>
				
			</div>	
	
			</div>		
		

	</nav>
	);
};









