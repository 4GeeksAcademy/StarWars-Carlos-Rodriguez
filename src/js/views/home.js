import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css"; // Asegúrate de que tus estilos estén configurados aquí
import { CardPerson } from "../component/cardPerson";
import { Context } from "../store/appContext";
import { CardPlanet } from "../component/cardPlanet";
import { CardVehicle } from "../component/cardVehicle";

export const Home = () => {
  const { store, actions } = useContext(Context);
  console.log("Home");

  return (
    <div className="dark-bg">
      <div className="d-flex justify-content-center">
        <div className="text-center">
          <h1 className="text-white p-4">
            <span className="text-warning">Characters</span>
          </h1>
          <div className="d-flex flex-row overflow-x-auto col-9 m-2">
            {store.persons.map((person) => (
              <CardPerson
                key={person.uid}
                name={person.name}
                gender={person.gender}
                hairColor={person.hairColor}
                eyeColor={person.eyeColor}
                uid={person.uid}
              />
            ))}
          </div>
          <h1 className="text-white p-4">
            <span className="text-warning">Planets</span>
          </h1>
          <div className="d-flex flex-row overflow-x-auto col-9 m-2">
            {store.planets.map((planet) => (
              <CardPlanet
                key={planet.uid}
                population={planet.population}
                terrain={planet.terrain}
                uid={planet.uid}
              />
            ))}
          </div>
		  <h1 className="text-white p-4">
            <span className="text-warning">Vehicles</span>
          </h1>
          <div className="d-flex flex-row overflow-x-auto col-9 m-2">
            {store.vehicles.map((vehicle) => (
              <CardVehicle
                key={vehicle.uid}
                name={vehicle.name}
                model={vehicle.model}
                uid={vehicle.uid}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
