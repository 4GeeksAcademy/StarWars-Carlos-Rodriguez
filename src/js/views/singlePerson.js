import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const SinglePerson = () => {
  const { id } = useParams();
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.openSinglePerson(id);
  }, [id, actions]);

  const person = store.singlePerson || {};

  return (
    <div
      className="card mt-4 mx-auto"
      style={{ maxWidth: "400px", background: "#000", color: "#fff" }}
    >
      <img
        className="card-img-top"
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
        alt={person.name}
        style={{ maxWidth: "100%", height: "auto" }}
      />
      <div className="card-body">
        <h5 className="card-title">{person.name}</h5>
        <p className="card-text">Gender: {person.gender}</p>
        <p className="card-text">Birth Year: {person.birth_year}</p>
        <p className="card-text">Eye Color: {person.eye_color}</p>
        <p className="card-text">Hair Color: {person.hair_color}</p>
        <p className="card-text">Height: {person.height}</p>
        <p className="card-text">Mass: {person.mass}</p>
      </div>
      <div className="card-body text-center">
        <a href="/" className="btn btn-warning">
          Back to Characters
        </a>
      </div>
    </div>
  );
};

export default SinglePerson;
