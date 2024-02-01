import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { CardPerson } from "../component/cardPerson";

import { Context } from "../store/appContext";

export const Home = () => {
  const { store, actions } = useContext(Context);
  console.log("Home");

  return (
    <div className="d-flex justify-content-center">
      <div className="d-flex flex-row overflow-x-auto col-9">
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
    </div>
  );
};