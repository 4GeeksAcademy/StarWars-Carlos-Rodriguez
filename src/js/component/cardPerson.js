import React from "react";
import { Link } from "react-router-dom";

export const CardPerson = (props) => {
  console.log ("CardPerson")
	return (
        <div className="card" style={{minWidth: "18rem"}}>
        <img src={`https://starwars-visualguide.com/assets/img/characters/${props.uid}.jpg`} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">Gender:{props.gender}</p>
          <p className="card-text">Hair-Color:{props.hairColor}</p>
          <p className="card-text">Eye-Color:{props.eyeColor}</p>
          <a href="#" className="btn btn-primary">Learn More!</a>
        </div>
      </div>
	);
};