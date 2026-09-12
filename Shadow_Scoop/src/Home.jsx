import image1 from "./assets/image1.png"
export function Home(){
    return(
        <>
        <body style={{backgroundColor:"black",color:"white"}}>
            
        
        <div style={{display:"flex",justifyContent:"space-around"}}>
            <div>
            <p>FUEL THE GRIND OWN THE SHADOW</p>
            <h1>SHADOW<h4 style={{marginTop:"0px"}}>SCOOP</h4></h1>
            </div>
            
        <img src={image1} alt="" width={"500px"} />
        </div>
        <h1>home page</h1>
        </body>
        </>
    )
}