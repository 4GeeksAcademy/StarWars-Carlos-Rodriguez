import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../store/appContext';

const SinglePlanet = () => {
  const { id } = useParams();
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.openSinglePlanet(id);
  }, [id, actions]);

  const planet = store.singlePlanet || {};

  return (
    <div className="card mt-4 mx-auto" style={{ maxWidth: '400px', background: '#000', color: '#fff' }}>
      <img
        className="card-img-top"
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
        alt={planet.name}
        style={{ maxWidth: '100%', height: 'auto' }}
      />
      <div className="card-body">
        <h5 className="card-title">{planet.name}</h5>
        <p className="card-text">Climate: {planet.climate}</p>
        <p className="card-text">Terrain: {planet.terrain}</p>
        <p className="card-text">Population: {planet.population}</p>
       
      </div>
      <div className="card-body text-center">
      <a href="/" className="btn btn-warning">
          Back to Characters
        </a>
      </div>
    </div>
  );
};

export default SinglePlanet;
