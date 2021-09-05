import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps';

const GMap = ({places}) => {
    return(
        <GoogleMap 
            defaultZoom={2} 
            defaultCenter={{lat: -33.839942751041924, lng: 151.20247092979042}}
        >
            {places && places.map((place, index)=>{
                return <Marker key={index} position={{lat:place[0] , lng:place[1]}} />
            })}
        </GoogleMap>
    )  
};

const Map = withScriptjs(withGoogleMap(GMap));
export default Map;