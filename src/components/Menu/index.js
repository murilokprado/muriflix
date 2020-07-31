import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";

import "./index.css";

import Logo from "../../assets/img/logo.png";

export default function Menu() {
  return (
    <nav className="Menu">
      <Link href="/">
        <img className="Logo" src={Logo} alt="Muriflix logo" />
      </Link>
      <Link className="ButtonLink" to="/cadastro/video">
        Novo vídeo
      </Link>
    </nav>
  );
}
