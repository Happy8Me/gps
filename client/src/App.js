import './App.css';

import { useState } from 'react';
import InputDMS from './components/InputDMS';
import InputDD from './components/InputDD';
import InputDMM from './components/InputDMM';
import Map from './components/Map';


// https://www.geeksforgeeks.org/program-distance-two-points-earth/


// Degrees, minutes, and seconds 
// let inputDMS = `[
//   [41°24'12.2"N 2°10'26.5"E], 41.386667, 2.173889
//   [55°57'25.7"N 3°11'19.9"W]
// ]`

// let inputDMM = `[
//   [41 24.2028, 2 10.4418],
//   [-34 54.2098, 3 11.6534]
// ]`


// "43 05 42.7 N = 43.095194"


const convertDMSToDecimal = (d, m, s) => Math.round((d + m/60 + s/3600) * 1000000)/1000000;
const convertDMMToDecimal = (d, m) => Math.round((d + m/60) * 1000000)/1000000;

function App() {

  const [degLat, setDegLat] = useState('');
  const [minLat, setMinLat] = useState('');
  const [secLat, setSecLat] = useState('');
  const [degLon, setDegLon] = useState('');
  const [minLon, setMinLon] = useState('');
  const [secLon, setSecLon] = useState('');
  const [DDLat, setDDLat] = useState('');
  const [DDLon, setDDLon] = useState('');
  const [signLat, setSignLat] = useState('');
  const [signLon, setSignLon] = useState('');
  const [degDMMLon, setDegDMMLon] = useState('');
  const [degDMMLat, setDegDMMLat] = useState('');
  const [minDMMLon, setMinDMMLon] = useState('');
  const [minDMMLat, setMinDMMLat] = useState('');
  const [locations, setLocations] = useState([
    [55.95714408575148, -3.188861268055779],
    [-23.0492440850088, 14.610795122622024],
    [-33.839942751041924, 151.20247092979042],
    [65.91026310771863, -120.8321981347113]
  ]);
  const [distances, setDistances] = useState([]);

  const handleSubmitDMS = e => {
    e.preventDefault();
    let lat = signLat + convertDMSToDecimal(degLat, minLat, secLat);
    let lon = signLon + convertDMSToDecimal(degLon, minLon, secLon);
    let location = [Number(lat), Number(lon)];
    setLocations([...locations, location]);
  };

  const handleSubmitDD = e => {
    e.preventDefault();
    let location = [DDLat, DDLon]
    setLocations([...locations, location])
  };

  const handleSubmitDMM = e => {
    e.preventDefault();
    let lat = convertDMMToDecimal(degDMMLat, minDMMLat);
    let lon = convertDMMToDecimal(degDMMLon, minDMMLon);    
    let location = [lat, lon];
    setLocations([...locations, location])
  };

  const handelSend = () => {
    const requestOptions = {
      method: 'POST',
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        },
      body: JSON.stringify({ locations })
    };

    fetch('api/distance', requestOptions)
    .then(response => response.json())
    .then(data => setDistances(data.split(',')))
    .catch(error => console.log('Error:', error))
  }

  return (
    <div className="App">
      <div className="forms">
        <InputDMS
          degLat={degLat}
          degLon={degLon}
          setDegLat={setDegLat}
          setDegLon={setDegLon}
          minLat={minLat}
          minLon={minLon}
          setMinLat={setMinLat}
          setMinLon={setMinLon}
          secLat={secLat}
          secLon={secLon}
          setSecLat={setSecLat}
          setSecLon={setSecLon}
          signLat={signLat}
          setSignLat={setSignLat}
          signLon={signLon}
          setSignLon={setSignLon}
          handleSubmitDMS={handleSubmitDMS}
        />
        <InputDD
          handleSubmitDD={handleSubmitDD}
          DDLat={DDLat}
          setDDLat={setDDLat}
          DDLon={DDLon}
          setDDLon={setDDLon}
        />
        <InputDMM
          degDMMLat={degDMMLat}
          setDegDMMLat={setDegDMMLat}
          degDMMLon={degDMMLon}
          setDegDMMLon={setDegDMMLon}
          minDMMLat={minDMMLat}
          setMinDMMLat={setMinDMMLat}
          minDMMLon={minDMMLon}
          setMinDMMLon={setMinDMMLon}
          handleSubmitDMM={handleSubmitDMM}
        />
      </div>

      <div className="container-results">
        <div className="results">
          <div>
            <h4>Location</h4>
            {locations && locations.map( (location, index) => <p key={index}>{location[0] +`, `+ location[1]}</p>)}
          </div>
          <div className="dist">
            <h4>Distance</h4>
            {distances && distances.map( (distance, index) => <p key={index}>{distance} km</p>)}
          </div>
        </div>
        <button onClick={handelSend}>Calculate distance</button>
      </div>
    
      <Map
        places={locations}
        className="map" 
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`} 
        loadingElement={<div style={{ height: `100%` }}/>}
        containerElement={<div style={{ height: `400px`, width: `70%` }}/>}
        mapElement={<div style={{ height: `100%` }} />}
      />

    </div>
  );
}

export default App;
