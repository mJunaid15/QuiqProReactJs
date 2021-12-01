import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

const Map = () => {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 24.860735, lng: 67.001137 }}
    />
  );
};
const WrappedMap = withScriptjs(withGoogleMap(Map));

const Googlemap = () => {
  return (
    <>
      <section className="googleMapSection">
        <div style={{height:"100vh",width:"100%"}}>
        <WrappedMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: "100%" }} />}
          containerElement={<div style={{ height: "100%" }} />}
          mapElement={<div style={{ height: "100%" }} />}
        
        />
        </div>
      
      </section>
    </>
  );
};

export default Googlemap;
