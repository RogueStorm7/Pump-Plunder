// import React, { useEffect, useRef, useState } from 'react';
// import {GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
// const sampleObj = require('../utils/sample-obj');
//  // let gasStations = {};
// let gsMarkers = JSON.parse(sampleObj);
// console.log(gsMarkers);
// let userLocation = {};
// let endPoint = '';

// function getStations(endpoint) {
//     // fetch(endpoint)
//     //     .then(res => res.json())
//     //     .then(data => {
//     //         console.log(data);
//     //         console.log(data.results);
//     //         console.log(data.results.items);
        
//     //         for (let i = 0; i < data.results.items.length; i++) {
//     //             gsMarkers.push({
//     //                 id: data.results.items[i].id,
//     //                 location: data.results.items[i].position,
//     //                 name: data.results.items[i].title,
//     //                 address: data.results.items[i].vicinity
//     //             })
//     //         }

//     //         console.log(gsMarkers);
//     //         console.log(JSON.stringify(gsMarkers));

            
//     //     })
    
   
   
//         // .then(res => res.json())
//         // .then(data => {
//         //     fs.writeFileSync('../utils/data.json', JSON.stringify(data, null, 2), 'utf-8');
//         // });

    




//     //console.log(sampleObj);
//     //console.log(sampleObj.replace(/'/g, '"'));
//     // gasStations = JSON.parse(sampleObj.replace(/'/g, '"'));
//     // console.log(sampleObj);

// }

// function writeEndPoint(lat, lng) {
//     endPoint = `https://places.ls.hereapi.com/places/v1/discover/explore?at=${lat}%2C${lng}&cat=petrol-station&apiKey=dD36DAdimAzcwz4H84i4jX-g-nAxGa8xZGmtD3nFRvw`;
//     console.log(endPoint);
//     getStations(endPoint);
// }

// function setCurrentPosition( position ) { 

//     // userLocation = {"lat": position.coords.latitude, "lng": position.coords.longitude};
//     userLocation = {lat: 37.7298605, lng: -122.1391877};
//     // writeEndPoint(position.coords.latitude, position.coords.longitude);
//     // writeEndPoint(37.7298605, -122.1391877);
// }

// function positionError( error ) { 

//     console.log(error);
// }

// // navigator.geolocation.getCurrentPosition(setCurrentPosition, positionError);

// const NestedMapDependencies = () => {

    

//     return <GoogleMap 
//             zoom={10} 
//             center={userLocation}
//             mapContainerClassName="map-container"
//         >
//             {gsMarkers.map((station) => (
//                 <Marker key={station.id} position={{lat: station.location[0], lng: station.location[1]}} />
//             ))}
//             <Marker position={userLocation} />

//             {}
//         </GoogleMap>;

// }

// const Map = () => {

//     // const { isLoaded } = useLoadScript({
//     //     googleMapsApiKey: "AIzaSyBRm3itj6oBIld55_PLJzQ6noL1aF3w_Uk"
//     // });

//     if (!isLoaded) return <div>Loading...</div>;
//     //return <NestedMapDependencies />;
    
// }

// export default Map;