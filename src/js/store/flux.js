const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      persons: [],
      planets: [],
      vehicles: [],
      favorites: [],
      singlePerson: {},
      singlePlanet: {},
      singleVehicle: {},
    },
    actions: {
      loadCharacters: async () => {
        try {
          const response = await fetch("https://www.swapi.tech/api/people/");
          if (!response.ok) {
            throw new Error(
              `Error al recuperar los personajes: ${response.statusText}`
            );
          }
          const data = await response.json();

          const charactersWithDetails = await Promise.all(
            data.results.map(async (character) => {
              const detailsResponse = await fetch(character.url);
              if (!detailsResponse.ok) {
                // Manejo de errores 429
                if (detailsResponse.status === 429) {
                  console.log("Esperando 1 segundo y volvemos a intentar");
                  await new Promise((resolve) => setTimeout(resolve, 1000));
                  return fetch(character.url).then((response) =>
                    response.json()
                  );
                }
                throw new Error(
                  `Error al recuperar los detalles del personaje: ${detailsResponse.statusText}`
                );
              }
              const detailsData = await detailsResponse.json();
              return {
                ...character,
                details: detailsData.result.properties,
              };
            })
          );

          setStore({ persons: charactersWithDetails || [] });
        } catch (error) {
          console.error("Error al recuperar los personajes:", error);
        }
      },

      loadPlanets: async () => {
        try {
          await new Promise((resolve) => setTimeout(resolve, 500));

          const response = await fetch("https://www.swapi.tech/api/planets/");
          if (!response.ok) {
            throw new Error(
              `Error al recuperar los planetas: ${response.statusText}`
            );
          }
          const data = await response.json();

          const planetsWithDetails = await Promise.all(
            data.results.map(async (planet) => {
              const detailsResponse = await fetch(planet.url);
              if (!detailsResponse.ok) {
                // Manejo de errores 429
                if (detailsResponse.status === 429) {
                  console.log(
                    "Esperando 1 segundo antes de intentar nuevamente..."
                  );
                  await new Promise((resolve) => setTimeout(resolve, 1000));
                  return fetch(planet.url).then((response) => response.json());
                }
                throw new Error(
                  `Error al recuperar los detalles del planeta: ${detailsResponse.statusText}`
                );
              }
              const detailsData = await detailsResponse.json();
              return {
                ...planet,
                details: detailsData.result.properties,
              };
            })
          );
            console.log(planetsWithDetails)
          setStore({ planets: planetsWithDetails || [] });
        } catch (error) {
          console.error("Error al recuperar los planetas:", error);
        }
      },

      loadVehicles: async () => {
        try {
          await new Promise((resolve) => setTimeout(resolve, 500));

          const response = await fetch("https://www.swapi.tech/api/vehicles/");
          if (!response.ok) {
            throw new Error(
              `Error al recuperar los vehículos: ${response.statusText}`
            );
          }
          const data = await response.json();

          const vehiclesWithDetails = await Promise.all(
            data.results.map(async (vehicle) => {
              const detailsResponse = await fetch(vehicle.url);
              if (!detailsResponse.ok) {
                // Manejo de errores 429
                if (detailsResponse.status === 429) {
                  console.log("Esperando 1 segundo y volvemos a intentar");
                  await new Promise((resolve) => setTimeout(resolve, 1000));
                  return fetch(vehicle.url).then((response) => response.json());
                }
                throw new Error(
                  `Error al recuperar los detalles del vehículo: ${detailsResponse.statusText}`
                );
              }
              const detailsData = await detailsResponse.json();
              return {
                ...vehicle,
                details: detailsData.result.properties,
              };
            })
          );

          setStore({ vehicles: vehiclesWithDetails || [] });
        } catch (error) {
          console.error("Error al recuperar los vehículos:", error);
        }
      },

      openSinglePerson: async (personId) => {
        try {
          const response = await fetch(
            `https://www.swapi.tech/api/people/${personId}`
          );
          if (!response.ok) {
            throw new Error(
              `Error al recuperar los detalles del personaje con ID ${personId}`
            );
          }
          const data = await response.json();

          setStore({ singlePerson: data.result.properties || {} });
        } catch (error) {
          console.error(
            `Error al recuperar los detalles del personaje con ID ${personId}:`,
            error
          );
        }
      },

      openSinglePlanet: async (planetId) => {
        try {
          const response = await fetch(
            `https://www.swapi.tech/api/planets/${planetId}`
          );
          if (!response.ok) {
            throw new Error(
              `Error al recuperar los detalles del planeta con ID ${planetId}`
            );
          }
          const data = await response.json();

          setStore({ singlePlanet: data.result.properties || {} });
        } catch (error) {
          console.error(
            `Error al recuperar los detalles del planeta con ID ${planetId}:`,
            error
          );
        }
      },

      openSingleVehicle: async (vehicleId) => {
        try {
          const response = await fetch(
            `https://www.swapi.tech/api/vehicles/${vehicleId}`
          );
          if (!response.ok) {
            throw new Error(
              `Error al recuperar los detalles del vehículo con ID ${vehicleId}`
            );
          }
          const data = await response.json();

          setStore({ singleVehicle: data.result.properties || {} });
        } catch (error) {
          console.error(
            `Error al recuperar los detalles del vehículo con ID ${vehicleId}:`,
            error
          );
        }
      },

      addToFavorites: (item) => {
        const store = getStore();

        setStore({
          favorites: [...store.favorites, item],
        });
      },

      deleteFromFavorites: (itemId) => {
        const store = getStore();

        setStore({
          favorites: store.favorites.filter((item) => item.id !== itemId),
        });
      },
    },
  };
};

export default getState;
