import useCoordinates from "../hooks/useCoordinates";

export default function GeoLocationContainer(BaseContainer){

    const [latitude, longitude] = useCoordinates();

    return function EnhancedGeoLocation(props){
        return(
            <BaseContainer {...props} latitude={latitude} longitude={longitude} />
        )
    }
}
