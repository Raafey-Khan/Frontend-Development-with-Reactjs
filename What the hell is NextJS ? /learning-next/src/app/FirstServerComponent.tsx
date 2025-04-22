import ClientButton from "./ClientButton";

export default function FirstServerComponent() {

    // a server component doesn't have interactivity
    //  but a server component can hold client component that has interactivity
    return(
        <>
         <h1>hello im from server component</h1>
         <ClientButton/>

        </>
       
    )
}