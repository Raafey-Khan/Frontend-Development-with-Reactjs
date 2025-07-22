import { useEffect, useState } from "react";

export default function GeoLocation(){
    const [latitude, setlatitude] = useState(null);
    const [longitude, setlongitude] = useState(null);

    function handleLocationSettings(coordinates) {
        console.log(coordinates.coords);
        setlatitude(coordinates.coords.latitude)
        setlongitude(coordinates.coords.longitude)
    } 

    // when the component loads at that time we want to access the users lat and long

    useEffect(() => {
        console.log("Started executing effect", navigator);
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(handleLocationSettings)
        }
    }, [navigator])

    return(
        <div>
            <h1>Geolocation:</h1>
            <div>Latitude: {latitude}</div>
            <div>Longitude: {longitude}</div>
        </div>
    )

}



// ---> Presentation Layer, --> Container Layer