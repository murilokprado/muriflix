import React from "react";
import Button from "../Button";

import "./index.css";

import Logo from "../../assets/img/logo.png";

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="Muriflix logo" />
      </a>
      <Button as="a" className="ButtonLink" href="/">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;
