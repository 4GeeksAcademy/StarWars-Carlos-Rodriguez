import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav class="navbar bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img
            src="https://cronkitenews.azpbs.org/wp-content/uploads/2021/07/navajo-star-wars-logo.png"
            alt="Logo"
            width="30"
            height="24"
            class="d-inline-block align-text-top"
          />
        </a>
      </div>
    </nav>
  );
};
