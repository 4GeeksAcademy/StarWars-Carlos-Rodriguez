import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { CardPerson } from "../component/cardPerson";
import { CardPlanet } from "../component/cardPlanet";
import { CardVehicle } from "../component/cardVehicle";
import { Carousel } from "react-bootstrap";

export const Home = () => {
  const { store, actions } = useContext(Context);

  const chunkArray = (array, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };
  const renderCardPersons = () => {
    return store.persons.map((person) => (
      <CardPerson
        key={person.uid}
        name={person.name}
        id={person.uid}
        details={person.details}
        actions={actions}
      />
    ));
  };
  

  const renderCardPlanets = () => {
    return store.planets.map((planet) => (
      <CardPlanet
        key={planet.uid}
        name={planet.name}
        id={planet.uid}
        details={planet.details}
        actions={actions} 
      />
    ));
  };

  const renderCardVehicles = () => {
    return store.vehicles.map((vehicle) => (
      <CardVehicle
        key={vehicle.uid}
        name={vehicle.name}
        id={vehicle.uid}
        details={vehicle.details}
        actions={actions} 
      />
    ));
  };

  return (
    <div className="container-fluid bg-dark">
      <div className="d-flex justify-content-center">
        <div className="text-center">
        <h1 className="text-white p-4">
            <span className="text-warning">Characters</span>
          </h1>
          <Carousel interval={5000}>
            {chunkArray(renderCardPersons(), 2).map((chunk, index) => (
              <Carousel.Item key={index}>
                <div className="d-flex justify-content-around">{chunk}</div>
              </Carousel.Item>
            ))}
          </Carousel>

          <h1 className="text-white p-4">
            <span className="text-warning">Planets</span>
          </h1>
          <Carousel interval={5000}>
            {chunkArray(renderCardPlanets(), 2).map((chunk, index) => (
              <Carousel.Item key={index}>
                <div className="d-flex justify-content-around">{chunk}</div>
              </Carousel.Item>
            ))}
          </Carousel>

          <h1 className="text-white p-4">
            <span className="text-warning">Vehicles</span>
          </h1>
          <Carousel interval={5000}>
            {chunkArray(renderCardVehicles(), 2).map((chunk, index) => (
              <Carousel.Item key={index}>
                <div className="d-flex justify-content-around">
                  {chunk.map((vehicleCard) => vehicleCard)}
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};
