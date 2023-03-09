import React, {useContext} from "react";
import {Context} from "../store/appContext";

import { Card } from "../component/Card";
import "../../styles/index.css";


export const Home = () => {
	const {store, actions} = useContext (Context)
	
	return (
			< >
			{store.login ?
				<div className="container">
					<div className="container m-2">
							<h2 className="text-danger text-center">MARVEL</h2>
						<div className="d-flex flex-nowrap scroll">

									{store.characters.map((item, index) => {
										return (
										<Card key={item.id}
											item={item}
											resource="characters"/>
										);
										}
									)};
						</div>
					</div>
			</div>:<button type="button" onClick={()=>actions.handleLogin()}>Hacer login</button>		
			}
			</>
			// <div className="container">
			// 		<div className="container m-2">
			// 				<h2 className="text-danger text-center">MARVEL</h2>
			// 			<div className="d-flex flex-nowrap scroll">

			// 						{store.characters.map((item, index) => {
			// 							return (
			// 							<Card key={item.id}
			// 								item={item}
			// 								resource="characters"/>
			// 							);
			// 							}
			// 						)};
			// 			</div>
			// 		</div>
			// </div>			
			)
}







