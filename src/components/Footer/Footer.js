import React, { useState, useEffect } from "react";
import "./Footer.css";
import logo from "../../assets/images/atletico-sanabria-transparent.png";

function Footer() {
  const [instagramPhotos, setInstagramPhotos] = useState([]);

  useEffect(() => {
    // Your Instagram API endpoint
    const instagramApiUrl = `https://graph.instagram.com/v12.0/me/media?fields=id,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=${process.env.REACT_APP_INSTAGRAM_TOKEN}`;

    fetch(instagramApiUrl)
      .then((response) => response.json())
      .then((data) => {
        setInstagramPhotos(data.data); // Assuming the photos are in the 'data' field
      })
      .catch((error) => {
        console.error("Error fetching Instagram photos: ", error);
      });
  }, []);
  return (
    <>
      <div id="footer">
        <div className="row margin py-5 g-3 text-start">
          <div className="col-lg-3 col-md-6">
            <div className="d-flex mb-2">
              <img src={logo} alt="Logo" className="footer-logo" />
              <div className="text-center mt-2">
                <p className="company-name-footer">
                  Atlético
                  <span className="company-sub-name-footer">Sanabria</span>
                </p>
                <p className="company-description">Club Deportivo</p>
              </div>
            </div>
            <span>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi utalip.
            </span>
            <div>
              <div className="my-2">
                <i className="fa-solid fa-phone me-2"></i>
                <span>
                  <b>Teléfono:</b> +34 699 37 54 12
                </span>
              </div>
              <div className="my-2">
                <i className="fa-solid fa-location-dot me-2"></i>
                <span>
                  <b>Dirección:</b> 4127 Lady Bug Drive street, Colorado
                  Springs,CO, 8903
                </span>
              </div>
              <div className="my-2">
                <i className="fa-solid fa-envelope me-2"></i>
                <span>
                  <b>Email:&nbsp;</b>
                  <span className="blue">atletico.sanabria@gmail.com</span>
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="d-flex mb-3">
              <h2 className="title me-2">Nuestras</h2>
              <h2 className="blue">Actividades</h2>
            </div>
            <ul className="footer-list pe-3">
              <li>Fútbol 11</li>
              <li>Fútbol sala</li>
              <li>Ciclismo</li>
              <li>Pádel</li>
              <li></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="d-flex mb-3">
              <h2 className="title me-2">Fotos</h2>
              <h2 className="blue">Instagram</h2>
            </div>
            <div className="row instagram-photos g-2">
              {instagramPhotos && instagramPhotos.map((photo) => (
                <div key={photo.id} className="col-4">
                  <a
                    href={photo.permalink}
                    target="_blank" // Opens the link in a new tab
                    rel="noopener noreferrer" // Security attribute
                    className="instagram-photo-link"
                  >
                    <img
                      src={photo.media_url}
                      alt={photo.caption}
                      className="instagram-photo img-fluid"
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="d-flex mb-3 ps-3">
              <h2 className="title me-2">Zona</h2>
              <h2 className="blue">Socios</h2>
            </div>
            <ul className="footer-list px-3">
              <li>Házte socio</li>
              <li>Reserva de actividades</li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center p-4" id="copy">
        <span className="m-0">
          &copy; 2023 Atlético Sanabria - Web desarrollada por &nbsp;
          <a
            href="https://www.linkedin.com/in/sara-moreira-g"
            target="_blank"
			rel="noopener noreferrer"
            className="blue"
          >
            Sara Moreira García
          </a>
		  <br></br>
          <i className="fa-solid fa-envelope blue me-1"></i>
          saramordev@gmail.com
          <i className="fa-solid fa-phone blue me-1 ms-2"></i> +34 699 37 54 12
        </span>
      </div>
    </>
  );
}

export default Footer;