import React, { useState } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';

const Map = () => {

  const defaultProps = {
    center: {
      lat: -23.536040,
      lng: -46.468591
    }, zoom: 18
  };

  const [selected, setSelected] = useState(true);

  return (
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
                Brasil
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
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

export default function Location() {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
    </div>
  )
};