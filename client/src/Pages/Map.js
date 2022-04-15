import React, { useEffect, useRef, useState } from 'react';
import {GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
const mapStyles = require('../assets/mapStyles');
const sampleObj = require('../utils/sample-obj');
let gsData = JSON.parse(sampleObj);

const gsMarkers = 
    gsData.map(marker => {
        const newMarker = marker.address.split("<");
        console.log(newMarker);
        marker.address = newMarker[0];
        console.log(marker);
        return marker;
        
    });

console.log(gsMarkers);

function getStations(endpoint) {
    // fetch(endpoint)
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         console.log(data.results);
    //         console.log(data.results.items);
        
    //         for (let i = 0; i < data.results.items.length; i++) {
    //             gsMarkers.push({
    //                 id: data.results.items[i].id,
    //                 location: data.results.items[i].position,
    //                 name: data.results.items[i].title,
    //                 address: data.results.items[i].vicinity
    //             })
    //         }

    //         console.log(gsMarkers);
    //         console.log(JSON.stringify(gsMarkers));

            
    //     })
    
   
   
        // .then(res => res.json())
        // .then(data => {
        //     fs.writeFileSync('../utils/data.json', JSON.stringify(data, null, 2), 'utf-8');
        // });

    




    //console.log(sampleObj);
    //console.log(sampleObj.replace(/'/g, '"'));
    // gasStations = JSON.parse(sampleObj.replace(/'/g, '"'));
    // console.log(sampleObj);

}

async function fetchFromAPIs() {
    //return await fetch('http://ip-api.com/json'); // get user location

    try {
        const userLocationRes = await fetch('http://ip-api.com/json');
        const userLocationData = userLocationRes.json();
        const userLocation = {
            userCoords: {
                lat: userLocationData.lat,
                lng: userLocationData.lon
            }
        }

        const gsLocationsRes = await fetch(nearbyGsEndPoint(userLocationData.lat, userLocationData.lon));
        const gsLocationsData = gsLocationsRes.json();
        const gsLocations = gsLocationsData.results.items;
        let gsMarkers = [];

        for (let i = 0; i < gsLocations.length; i++) {
            gsMarkers.push({
                id: gsLocations[i].id,
                location: gsLocations[i].position,
                name: gsLocations[i].title,
                address: gsLocations[i].vicinity
            })
        }

        return({
            ...userLocation,
            gsMarkers: gsMarkers
        });
    } catch (error) {
        console.log(error);
    }
}


function nearbyGsEndPoint(lat, lng) {
    return `https://places.ls.hereapi.com/places/v1/discover/explore?at=${lat}%2C${lng}&cat=petrol-station&apiKey=dD36DAdimAzcwz4H84i4jX-g-nAxGa8xZGmtD3nFRvw`;
}

// function setCurrentPosition( position ) { 

//     userLocation = {lat: position.coords.latitude, lng: position.coords.longitude };
// }

// function positionError( error ) { 

//     console.log(error);
// }

// navigator.geolocation.getCurrentPosition(setCurrentPosition, positionError);

// fetch('http://ip-api.com/json')
//     .then(res => res.json())
//     .then(data => {
        
//     })
// ;

const NestedMapDependencies = () => {

    const userLocation = {
        lat: 37.7893403,
        lng: -122.2267357
    }

    const mockObj = {
        userLocation,
        gsMarkers
    }
  
    const [mapData, setMapData] = useState(mockObj);

    const [selectedStation, setSelectedStation] = useState(null);
    console.log(selectedStation);

    return (
        <GoogleMap 
            zoom={13} 
            center={mapData.userLocation}
            mapContainerClassName="map-container"
            options={{
                styles: mapStyles
            }}
        >
            
            {mapData.gsMarkers.map((station) => (
                <Marker 
                    key={station.id} 
                    position={{lat: station.location[0], lng: station.location[1]}} 
                    icon={'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'}
                    onClick={() => {
                        setSelectedStation(station);
                    }}
                />
            ))}

            {selectedStation && (
                <InfoWindow
                    className="info-window"
                    position={{lat: selectedStation.location[0], lng: selectedStation.location[1]}}
                    onCloseClick={() => {
                        setSelectedStation(null);
                    }}
                >
                    <div>
                        <h5>
                            {selectedStation.name}
                        </h5>
                        <p>
                            {selectedStation.address}
                        </p>
                        
                    </div>                    
                </InfoWindow>
                
            )}

            <Marker position={mapData.userLocation} />

           
        </GoogleMap>
    );

}

const Map = () => {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyDx-i0lS1O5SGCiWqCG7kTlGxdKyyRu0Dc"
    });

    if (!isLoaded) return <div>Loading...</div>;
    return <NestedMapDependencies />;
    
}

export default Map;