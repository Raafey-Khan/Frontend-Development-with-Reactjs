

export default function GeoLocation({latitude, longitude}){


    return(
         <div>
      
       
            <h1>Geolocation:</h1>
            <div>Latitude: {latitude}</div>
            <div>Longitude: {longitude}</div>
        </div>
    )

}


// Separtion of Concerns


// ---> Presentation Layer(UI), --> Container Layer (Logic)