import React from "react";
import "./Home.css";
import NedenBercislina from "../home/neden/Neden.js";
import Mail from "../iletisim/ContactForm";
import Owl from "../slider/owlcarousel/Owl";
import Klinik from "../klinik/Klinik.js";

import TopluHizmet from "../topluhizmet/TopluHizmet.js";

function Home() {
  return (
    <div>
      <div className="row">
        <h2
          className="doktorlarTitle"
          style={{
            textAlign: "center",
            fontSize: "x-large",
            marginTop: "1rem",
            color: "#b22e86",
            fontFamily: "sans-serif",
          }}
        >
          Kayıtlarımız Başlamıştır
        </h2>
        <Klinik />
      </div>

      <br />
      <hr />

      <div className="col-12">
        <NedenBercislina />
      </div>

      <br />
      <hr />
      <div className="row">
        <TopluHizmet />
      </div>

      <hr />

      <div className="row">
        <h2
          className="doktorlarTitle"
          style={{
            textAlign: "center",
            fontSize: "x-large",
            color: "#b22e86",
            fontFamily: "sans-serif",
          }}
        >
          Hizmetlerimiz
        </h2>
        <Owl />
      </div>
      <br />
      <div className="col-12">
        <Mail />
      </div>
      <br />
      <div className="row m-2">
        <div
          className="col-lg-12  col-12 harita"
          style={{ marginTop: "2.5rem" }}
        >
          <p className="harita_baslik">Lokasyonumuz</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191.2879521746535!2d41.26934403824897!3d39.905425155742286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3de555931d3c37%3A0x8fae41837816fba4!2sEliva%20Beauty%20Erzurum!5e0!3m2!1str!2str!4v1678744925229!5m2!1str!2str"
            className="googleharita"
            style={{
              width: "100%",
              height: "45rem",
              frameBorder: "0",
              allowFullScreen: "",
              referrerpolicy: "no-referrer-when-downgrade",
              ariaHidden: "false",
              tabIndex: "0",
              border: "2px #b22e86 solid",
              paddingBottom: "0.5rem",
              paddingTop: "0.5rem",
            }}
          >
            {" "}
          </iframe>
        </div>
      </div>
    </div>
  );
}

export default Home;
