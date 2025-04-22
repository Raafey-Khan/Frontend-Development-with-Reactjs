export default function BlogComments({params} : {params : {id: string}} ) {
    console.log(params);
    return(
        <>
        
        Blog Comments{params.id}
        </>
    )
}