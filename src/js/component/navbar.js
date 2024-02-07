import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const favorites = store.favorites
  console.log(favorites)

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fcronkitenews.azpbs.org%2Fwp-content%2Fuploads%2F2021%2F07%2Fnavajo-star-wars-logo.png"
            alt="Star Wars Logo"
            width="30"
            height="30"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Favorites
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                {favorites.length > 0 ? (
                  favorites.map(
                    (item) => (
                      (
                        <li key={item.id}>
                          <Link
                            to={`/single${item.category}/${item.id}`}
                            className="dropdown-item"
                          >
                            {item.name}
                          </Link>

                          <button
                            onClick={() => actions.deleteFromFavorites(item.id)}
                            className="btn btn-danger btn-sm ms-2"
                          >
                            Remove
                          </button>
                        </li>
                      )
                    )
                  )
                ) : (
                  <li>
                    <span className="dropdown-item">No favorites yet</span>
                  </li>
                )}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
