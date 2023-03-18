const API_URL = "https://gateway.marvel.com/v1/public/characters?ts=thesoer&apikey=001ac6c73378bbfff488a36141458af2&hash=72e5ed53d1398abb831c3ceec263f18b";


const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			singleItem: {},
			favorites: [],
			heartButtom: "outline-",
			login: false,

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

					console.log(body);

			signUp: async ({ ...requestBody }) => {
						requestBody.name = requestBody.user;
						delete requestBody.user;
						try {
						  const response = await fetch(
							`${process.env.BACKEND_URL}/api/login`,
							{
							  method: "POST",
							  body: JSON.stringify(requestBody),
							  headers: {
								"Content-Type": "application/json",
							  },
							}
							);
						  if (response.status === 201) {
							const data = await response.json();
							localStorage.setItem("jwt-token", data.token);
						  }
						  return response.status === 201;
						} catch (error) {
						  console.log(error);
						  return false;
						}
					  };
				
			logIn: async (requestBody) => {
						try {
						  const response = await fetch(`${process.env.BACKEND_URL}/api/login`, {
							method: "POST",
							body: JSON.stringify({
							  ...requestBody,
							  email: requestBody.user,
							}),
							headers: { "Content-Type": "application/json" },
						  });
				
						  if (response.status !== 200) {
							throw "Invalid email or password format";
						  }
				
						  const data = await response.json();
						  localStorage.setItem("jwt-token", data.token);
				
						  return data;
						} catch (error) {
						  console.log(error);
						  return false;
						}
					  },
				
			// private: async () => {
			// 			const token = localStorage.getItem("jwt-token");
			// 			const response = await fetch(`${process.env.BACKEND_URL}/api/private`, {
			// 			  method: "GET",
			// 			  headers: {
			// 				"Content-Type": "application/json",
			// 				Authorization: `Bearer ${token}`,
			// 			  },
			// 			});
			// 			if (!response.ok)
			// 			  throw Error("There was a problem in the login request");
			// 			var data = await response.json();
			// 			console.log("This is the data you requested", data);
			//     setStore({
			// 			  private: data,
			// 			});
			// 			return data;
			// 		  },

			setStore ({
				[`${resource}`]: body.data.results
					})
				}	
				catch (error) {
					alert("promesa rechazada, servidor caído")
				};
			},

			handleLogin: ()=> {
				setStore({
					login: true
				}) 

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
