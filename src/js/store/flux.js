const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      persons: [],
      planets: [],
      vehicles: [],
      favorites: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      
		loadCharacters: async () => {
			try {
			  const response = await fetch("https://www.swapi.tech/api/people/");
			  if (!response.ok) {
				throw new Error("Error al recuperar los personajes");
			  }
			  const data = await response.json();
			  setStore({ persons: data.results || [] });
			} catch (error) {
			  console.error("Error al recuperar los personajes:", error);
			}
		  },
		  loadPlanets: async () => {
			try {
			  const response = await fetch("https://www.swapi.tech/api/planets/");
			  if (!response.ok) {
				throw new Error("Error al recuperar los personajes");
			  }
			  const data = await response.json();
			  setStore({ planets: data.results || [] });
			} catch (error) {
			  console.error("Error al recuperar los personajes:", error);
			}
		  },
		  loadVehicles: async () => {
			try {
			  const response = await fetch("https://www.swapi.tech/api/vehicles/");
			  if (!response.ok) {
				throw new Error("Error al recuperar los personajes");
			  }
			  const data = await response.json();
			  setStore({ vehicles: data.results || [] });
			} catch (error) {
			  console.error("Error al recuperar los personajes:", error);
			}
		  },
      addToFavorites: () => {},
      deleteFromFavorites: () => {},
      openSinglePerson: () => {},
      openSinglePlanet: () => {},
      openSingleVehicle: () => {},
    },
  };
};

export default getState;
