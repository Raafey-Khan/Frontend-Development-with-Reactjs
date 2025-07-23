
export default function GeoLocationContainer({ children }){
 


    return(
        <div>
            {children}
           
        </div>
        // this is a children prop in react
        // creates this Geolocation Container Component a Wrapper for containing
        // children components
    )

    
}


// Separtion of Concerns


// ---> Presentation Layer(UI), --> Container Layer (Logic)