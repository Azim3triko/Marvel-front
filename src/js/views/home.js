import React, {useContext} from "react";
import {Context} from "../store/appContext";

import { Card } from "../component/Card";
import "../../styles/home.css";


export const Home = () => {
	const {store, actions} = useContext (Context)
	
	return (
	
			<div className="container">
					<div className="container m-2">
							<h2 className="text-warning">MARVELs</h2>
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
			</div>			
			)
}







