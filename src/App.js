import { useState } from 'react';
import './App.css';
import {Room} from "@material-ui/icons"
import Map, { Marker } from 'react-map-gl';

function App() {
  const [viewState, setViewState] = useState({
    longitude: -100,
    latitude: 40,
    zoom: 3
  });
  return (
    <div className='App'>
      <Map
        {...viewState}
        mapboxAccessToken={process.env.REACT_APP_MAPBOX}
        onMove={evt => setViewState(evt.viewState)}
        style={{ width: "100vw", height: "100vh" }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        <Marker longitude={2.294694} latitude={48.858093} anchor="bottom" >
          <Room/>
        </Marker>
      </Map>
    </div>
  );
}

export default App;
