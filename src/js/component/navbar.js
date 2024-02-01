import React from "react";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="https://cronkitenews.azpbs.org/wp-content/uploads/2021/07/navajo-star-wars-logo.png"
            alt="Logo"
            width="50"
            height="40"
            className="d-inline-block align-text-top"
          />
        </a>

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

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white fs-5" // fs-5 para tamaño de fuente más grande
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Favorites <span className="badge bg-primary">0</span>
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                {/* Puedes agregar elementos de la lista de favoritos aquí */}
                {/* Ejemplo de elemento de favorito:
                <li>
                  <a className="dropdown-item" href="#">
                    Favorito 1
                  </a>
                </li>
                */}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

