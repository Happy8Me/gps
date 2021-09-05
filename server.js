const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/distance', (req, res) => {
    const locations = req.body.locations;
    const distance = findDistance(locations);
    res.send(
        JSON.stringify(`${distance}`),
    );
});

app.listen(port, () => console.log(`Listening on port ${port}`));



function deegreesToRadians(coordinates){
    const RAD = 180/Math.PI;
    return coordinates.map(c => c/RAD);
};

function findDistance(coor){                                         //accepts array of arrays                    
    let distance = [];
    for(let i = 0; i < coor.length-1; i++) {          
    
        const c1Rad =  deegreesToRadians(coor[i])                      //converting coordinates from dergees to radians
        const c2Rad =  deegreesToRadians(coor[i+1])                         
    
        let lat1 = c1Rad[0];
        let lat2 = c2Rad[0];
        let lon1 = c1Rad[1];
        let lon2 = c2Rad[1];
    
        // Haversine formula
        let lonDistance = lon2 - lon1;
        let latDistance = lat2 - lat1;
        let a = Math.pow(Math.sin(latDistance / 2), 2)
                    + Math.cos(lat1) * Math.cos(lat2)
                    * Math.pow(Math.sin(lonDistance / 2),2);
    
        let c = 2 * Math.asin(Math.sqrt(a));                        
    
        const earthRadius = 6371;                                       //km
        distance.push( Math.round(c * earthRadius * 100) / 100 )
    };
    return distance
};