import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Container from 'react-bootstrap/Container';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';
import './Location.css';

const Map = () => {

  const defaultProps = {
    center: {
      lat: -23.536040,
      lng: -46.468591
    }, zoom: 18
  };

  const [selected, setSelected] = useState(true);

  return (
    <div>
      <GoogleMap
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Marker
          position={defaultProps.center}
          onClick={() => setSelected(true)}
        />

        {selected && (
          <InfoWindow 
            position={defaultProps.center}
            onCloseClick={() => setSelected(false)}
          >
            <div style={{ maxWidth: "130px" }}>
              <h6>Eletrozé Materiais para Construção</h6>
              <p>
                Rua Jaguarundi, 303 - Cidade Antônio Estêvão de Carvalho
                <br></br>
                São Paulo - SP
                <br></br>
                08223-040
                <br></br>
                <a
                  style={{ textDecoration: 'underline' }}
                  href={`https://www.google.com/maps/dir/?api=1&destination=Eletrozé+Materiais+para+Construção+Rua+Jaguarundi+303' }}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Como chegar
                </a>
              </p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

export default function Location() {
  return (
    <Container className="location" fluid>
      <Navbar></Navbar>
      <div className="d-flex flex-column justfiy-content-center">
        <div className="map-info">
          <p>
            Estamos na Rua Jaguarundi, 303.
          </p>
        </div>
        <div className="map-div">
          <WrappedMap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
            loadingElement={<div style={{ height: "100%" }} />}
            containerElement={<div style={{ height: "100%", width: "100%" }} />}
            mapElement={<div style={{ height: "100%" }} />}
          />
        </div>
      </div>
    </Container>
  )
};