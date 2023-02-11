const API_URL = "https://www.swapi.tech/api";


const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			character: [],
			planets: [],
			vehicles: [],
			singleItem: {},
			favorites: [],
			heartButtom: "outline-",

		},

		actions: {
			getItems: async (resource) => {
				try { 
					const response = await fetch (
						`${API_URL}/${resource}`
					);
					const body = await response.json();
					if (response.status!== 200) {
						alert ("no pudimos cargar los personajes");
						return;
					}
					setStore ({
				[`${resource}`]: body.results
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
						...body.result.properties,
						uid: body.result.id,
						description: body.result.description,
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
