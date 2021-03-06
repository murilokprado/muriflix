import React from "react";
import Menu from "../../components/Menu";
import BannerMain from "../../components/BannerMain";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";

import dadosIniciais from "../../data/dados_iniciais.json";

export default function Home() {
  return (
    <div style={{ background: "#141414" }}>
      <Menu />
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription="teste"
      />

      {dadosIniciais.categorias.map((categoria) => (
        <Carousel category={categoria} />
      ))}

      <Footer />
    </div>
  );
}
