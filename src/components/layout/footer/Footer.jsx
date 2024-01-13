import {
  faSquareFacebook,
  faSquareGooglePlus,
  faSquareInstagram,
  faSquareWhatsapp,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <div className="">
          <div className="link">
            <a href="#">
              <div className="link_text">facebook</div>
              <div className="link_icon">
                <FontAwesomeIcon className="whatIcon" icon={faSquareFacebook} />
              </div>
            </a>
          </div>
          <div className="link">
            <a href="#">
              <div className="link_text">suivre sur Whatsapp</div>
              <FontAwesomeIcon
                style={{ color: "green" }}
                className="whatIcon"
                icon={faSquareWhatsapp}
              />
            </a>
          </div>
          <div className="link">
            <a href="#">
              <div className="link_text">suivre sur Instagram</div>
              <div className="link_icon">
                <FontAwesomeIcon icon={faSquareInstagram} />
              </div>
            </a>
          </div>
          <div className="link">
            <a href="#">
              <div className="link_text">suivre sur Tick-tock</div>
              <div className="link_icon">
                <FontAwesomeIcon icon={faTiktok} />
              </div>
            </a>
          </div>
        </div>
        <div className="">
          <div className="link">
            <a href="#">
              <div className="link_text">
                Email: <span>eeeeeeeee@gmail.com</span>
              </div>
              <div className="link_icon">
                <FontAwesomeIcon icon={faSquareGooglePlus} />
              </div>
            </a>
          </div>
          <div className="link">
            <a href="#">
              <div className="link_text">
                Email: <span>eeeeeeeee@gmail.com</span>
              </div>
              <div className="link_icon">
                <FontAwesomeIcon icon={faSquareGooglePlus} />
              </div>
            </a>
          </div>
          <div className="link">
            <a href="#">
              <div className="link_text">
                Email: <span>eeeeeeeee@gmail.com</span>
              </div>
              <div className="link_icon">
                <FontAwesomeIcon icon={faSquareGooglePlus} />
              </div>
            </a>
          </div>
          <div className="link">
            <a href="#">
              <div className="link_text">
                Email: <span>eeeeeeeee@gmail.com</span>
              </div>
              <div className="link_icon">
                <FontAwesomeIcon icon={faSquareGooglePlus} />
              </div>
            </a>
          </div>
        </div>
        <div className="">
          <div className="link">
            <a href="#">
              <div className="link_text">je loue une voiture</div>
            </a>
          </div>
          <div className="link">
            <a href="#">
              <div className="link_text">je loue une reshidence</div>
            </a>
          </div>
          <div className="link">
            <a href="#">
              <div className="link_text">je loue une taskeur</div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
