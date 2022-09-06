import { useState } from "react";
import "./App.css";
import { Room } from "@material-ui/icons";
import Map, {
  FullscreenControl,
  GeolocateControl,
  Marker,
  NavigationControl,
  Popup,
  ScaleControl,
} from "react-map-gl";

function App() {
  const [viewState, setViewState] = useState({
    longitude: 17,
    latitude: 46,
    zoom: 3.5,
    bearing: 0,
    pitch: 0,
  });
  return (
    <div className="App" style={{ width: "100%", height: "100vh" }}>
      <Map
        {...viewState}
        mapboxAccessToken={process.env.REACT_APP_MAPBOX}
        onMove={(evt) => setViewState(evt.viewState)}
        width="100%"
        height="100%"
        transitionDuration="200"
        mapStyle="mapbox://styles/mapbox/dark-v9"
      >
        <GeolocateControl position="top-left" />
        <FullscreenControl position="top-left" />
        <NavigationControl position="top-left" />
        <ScaleControl />
        <Marker longitude={-100} latitude={40} anchor="bottom">
          <Room style={{ fontSize: viewState.zoom * 7, color: "slateblue" }} />
        </Marker>
        <Popup
          longitude={48.858093}
          latitude={2.294694}
          closeButton={true}
          closeOnClick={false}
          anchor="bottom"
        >
          You are here
        </Popup>
      </Map>
    </div>
  );
}

export default App;
