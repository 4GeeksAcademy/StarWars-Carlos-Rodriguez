const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			persons: [{
				name: "Carlos Rodriguez",
				gender: "Male",
				hairColor: "Brown",
				eyeColor: "Brown",
				uid: "1"

			},
			{
				name: "Carlos Rodriguez",
				gender: "Male",
				hairColor: "Brown",
				eyeColor: "Brown",
				uid: "1"

			},
			{
				name: "Carlos Rodriguez",
				gender: "Male",
				hairColor: "Brown",
				eyeColor: "Brown",
				uid: "1"

			}],
			planets: [],
			vehicles: [],
			favorites: [],
			
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			
			addToFavorites: () => {},
			deleteFromFavorites: () => {},
			openSinglePerson: () => {},
			openSinglePlanet: () => {},
			openSingleVehicle: () => {},
			
		}
	};
};

export default getState;
