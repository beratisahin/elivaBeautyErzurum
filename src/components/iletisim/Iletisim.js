import "./Iletisim.css";
import React from "react";
import useDocumentTitle from "../../useDocumentTitle.js";
import Title from "../title/Title";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import Mail from "./ContactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import HomeIcon from "@material-ui/icons/Home";


function Iletisim() {
  useDocumentTitle("İletişim - Erzurum Eliva Beauty ");
  return (
    <div className="col-12">
      <div
        className="card m-4"
        style={{
          align: "center",
          backgroundColor: "#f8f7fb",
          borderRadius: "5px",
        }}
      >
        <Title page_title="İletişim" />
      </div>

      <div
        class="col-lg-6s col-md-6 col-sm-12 col-12"
        style={{ }}
      >
        <p className="contactInfo">İletişim Bilgilerimiz</p>

        <p style={{ fontSize: "medium", textAlign: "left" }}>
              {" "}
              <a href="mailto:elivabeautyErzurum@gmail.com">
                <ContactMailIcon style={{ fontSize: "x-large" }} />
              </a>
              &nbsp; elivabeautyErzurum@gmail.com
            </p>
            <p style={{ fontSize: "medium", textAlign: "left", }}>
              {" "}
              <a
                href="tel: +905057790025"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon style={{ fontSize: "x-large",color:"#25d366" }} />
              </a>
              &nbsp; <b>0506 032 65 06</b> <FontAwesomeIcon icon="coffee" size="lg" />
            </p>
            <p style={{ fontSize: "medium", textAlign: "left" }}>
              <a
                href="https://goo.gl/maps/P8nV1rQDjqjbftPv8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <HomeIcon style={{ fontSize: "x-large" }} />
              </a>
              &nbsp; Muratpaşa mahallesi Cumhuriyet caddesi Palerium AVM Kat:1 No:38 
           
              
            </p>
            <p style={{ fontSize: "14px", textAlign: "left" }}>
              <a
                href="https://goo.gl/maps/P8nV1rQDjqjbftPv8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LocationOnIcon style={{ fontSize: "24px" , color:"red" }} />
              </a>
              &nbsp; 
              <b>Yakutiye / ERZURUM</b>{" "}
            </p>
      </div>











      <div class="col-lg-6 col-md-6 col-sm-12 col-12">
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
        <Mail/>

    </div>
  );
}

export default Iletisim;
