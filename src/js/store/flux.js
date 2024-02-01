const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      persons: [
        {
          name: "Carlos Rodriguez",
          gender: "Male",
          hairColor: "Brown",
          eyeColor: "Brown",
          uid: "1",
        },
        {
          name: "Carlos Rodriguez",
          gender: "Male",
          hairColor: "Brown",
          eyeColor: "Brown",
          uid: "1",
        },
        {
          name: "Carlos Rodriguez",
          gender: "Male",
          hairColor: "Brown",
          eyeColor: "Brown",
          uid: "1",
        },
		{
			name: "Carlos Rodriguez",
			gender: "Male",
			hairColor: "Brown",
			eyeColor: "Brown",
			uid: "1",
		  },
		  {
			name: "Carlos Rodriguez",
			gender: "Male",
			hairColor: "Brown",
			eyeColor: "Brown",
			uid: "1",
		  },
		  {
			name: "Carlos Rodriguez",
			gender: "Male",
			hairColor: "Brown",
			eyeColor: "Brown",
			uid: "1",
		  },
		  {
			name: "Carlos Rodriguez",
			gender: "Male",
			hairColor: "Brown",
			eyeColor: "Brown",
			uid: "1",
		  },
		  {
			name: "Carlos Rodriguez",
			gender: "Male",
			hairColor: "Brown",
			eyeColor: "Brown",
			uid: "1",
		  },
		  {
			name: "Carlos Rodriguez",
			gender: "Male",
			hairColor: "Brown",
			eyeColor: "Brown",
			uid: "1",
		  },
      ],
      planets: [
        {
          name: "Alderaan",
          population: "20000000",
          Terrain: "grasslands, mountains",
          uid: "2",
        },
		{
			name: "Alderaan",
			population: "20000000",
			Terrain: "grasslands, mountains",
			uid: "2",
		  },
		  {
			name: "Alderaan",
			population: "20000000",
			Terrain: "grasslands, mountains",
			uid: "2",
		  },
		  {
			name: "Alderaan",
			population: "20000000",
			Terrain: "grasslands, mountains",
			uid: "2",
		  },
		  {
			name: "Alderaan",
			population: "20000000",
			Terrain: "grasslands, mountains",
			uid: "2",
		  },
		  {
			name: "Alderaan",
			population: "20000000",
			Terrain: "grasslands, mountains",
			uid: "2",
		  },
		  {
			name: "Alderaan",
			population: "20000000",
			Terrain: "grasslands, mountains",
			uid: "2",
		  },
		  {
			name: "Alderaan",
			population: "20000000",
			Terrain: "grasslands, mountains",
			uid: "2",
		  },
		  {
			name: "Alderaan",
			population: "20000000",
			Terrain: "grasslands, mountains",
			uid: "2",
		  },
		  {
			name: "Alderaan",
			population: "20000000",
			Terrain: "grasslands, mountains",
			uid: "2",
		  },
      ],
      vehicles: [  {
		name: "Storm IV Twin-Pod cloud car",
		population: "Bespin Motors",
		uid: "3",
	  },
	  {
		name: "Storm IV Twin-Pod cloud car",
		population: "Bespin Motors",
		uid: "3",
	  },
	  {
		name: "Storm IV Twin-Pod cloud car",
		population: "Bespin Motors",
		uid: "3",
	  },
	  {
		name: "Storm IV Twin-Pod cloud car",
		population: "Bespin Motors",
		uid: "3",
	  },{
		name: "Storm IV Twin-Pod cloud car",
		population: "Bespin Motors",
		uid: "3",
	  },
	  {
		name: "Storm IV Twin-Pod cloud car",
		population: "Bespin Motors",
		uid: "3",
	  },
	  {
		name: "Storm IV Twin-Pod cloud car",
		population: "Bespin Motors",
		uid: "3",
	  },
	  {
		name: "Storm IV Twin-Pod cloud car",
		population: "Bespin Motors",
		uid: "3",
	  },
	],
	  
	  
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
    },
  };
};

export default getState;
