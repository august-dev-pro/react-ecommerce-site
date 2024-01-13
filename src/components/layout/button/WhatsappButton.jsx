import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "../header/header.css";

const WhatsAppButton = ({
  phoneNumber = "+2250153339627",
  message = "je suis interesser par",
}) => {
  const handleWhatsAppCall = () => {
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <button className="WhatsAppButton" onClick={handleWhatsAppCall}>
      <span>Discussion whatsapp</span>{" "}
      <FontAwesomeIcon className="whatIcon" icon={faWhatsapp} />
    </button>
  );
};

export default WhatsAppButton;

/* import React from "react";

const WhatsAppButton = () => {
  const phoneNumber = "+2250153339627"; // Remplacez ceci par le numéro de téléphone souhaité
  const message = "Bonjour, je suis intéressé par votre produit."; // Remplacez ceci par le message souhaité

  const handleWhatsAppCall = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return <button onClick={handleWhatsAppCall}>Chat sur WhatsApp</button>;
};

export default WhatsAppButton; */
