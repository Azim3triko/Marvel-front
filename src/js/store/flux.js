const API_URL = "https://gateway.marvel.com/v1/public/characters?ts=thesoer&apikey=001ac6c73378bbfff488a36141458af2&hash=72e5ed53d1398abb831c3ceec263f18b";


const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			singleItem: {},
			favorites: [],
			heartButtom: "outline-",

		},

		actions: {
			getItems: async (resource) => {
				try { 
					const response = await fetch (

						`https://gateway.marvel.com/v1/public/characters?ts=thesoer&apikey=001ac6c73378bbfff488a36141458af2&hash=72e5ed53d1398abb831c3ceec263f18b`, 
					);
					const body = await response.json();
					if (response.status!== 200) {
						alert ("no pudimos cargar los personajes");
						return;
					}

					console.log(body),

					setStore ({
				[`${resource}`]: body.data.results
					})
				}	
				catch (error) {
					alert("promesa rechazada, servidor caído")
				};
			},
			 getSingleItem: async (resource, id) => {
			 	try { 
					const response = await fetch (
						`${API_URL}/${resource}/${id}`
			 	);
			 		const body = await response.json();
					if (response.status!== 200) {
						alert ("no pudimos cargar los planetas!");
						return;
					}
			 		setStore ({
			 		singleItem: {
			 			...body.data.results,
						id: body.data.results.id,
			 			description: body.data.results.description,
					}	
		 		})
			 	} catch (error) {
					alert ("promesa rechazada, servidor caído")
					console.log(error)
				}
			 },
			 removeSingleItem: async (resource) => {
				
			 		setStore ({
			 		    singleItem: ""
			 		})
			 	},	

			 	addFavorites: (resource) => {
			 		setStore({
			 			favorites: [...getStore().favorites, resource]
			 		})
			 		getActions().holdHeartButton()

			 	},
			 	deleteFavorites: (resource) => {
					setStore({
						favorites: [...getStore().favorites.filter((item,index)=>{
							if (resource.name !== item.name) return true;
			 			})]
					})
			 	},
				holdHeartButtom: () => {
					setStore ({
						heartButton: "",

					}
					)
				}
			}			
	};
};

export default getState;
