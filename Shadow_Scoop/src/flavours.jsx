import caramel from "./assets/caramel flavour.png";
import image1 from "./assets/image2.png";
import mango from "./assets/mango flavour.png";
import strawberry from "./assets/strawberry flavour.png";
import vanilla from "./assets/vanilla flavour.png";

function Flavours(){
    return(
        <>
         <div style={{display:"flex",gap:"10px",flexWrap:"wrap",justifyContent:"center"}}>
        <div style={{textAlign:"center",border:"2px solid white",boxShadow:"1px 1px 5px ",borderRadius:"30px"}}>
        <img src={image1} alt="" width={"160px"} />
        <h5>Chocolate Flavour</h5>
        <button style={{borderRadius:"5px",backgroundColor:"black",color:"white",cursor:'pointer'}}>Buy now</button>
        </div>

        <div style={{textAlign:"center",border:"2px solid white",boxShadow:"1px 1px 5px ",borderRadius:"30px"}}>
        <img src={mango} alt="" width={"160px"} />
        <h5>Mango Flavour</h5>
        <button style={{borderRadius:"5px",backgroundColor:"black",color:"white",cursor:'pointer'}}>Buy now</button>
        </div>

        <div style={{textAlign:"center",border:"2px solid white",boxShadow:"1px 1px 5px ",borderRadius:"30px"}}>
        <img src={strawberry} alt="" width={"160px"} />
        <h5>Strawberry Flavour</h5>
        <button style={{borderRadius:"5px",backgroundColor:"black",color:"white",cursor:'pointer'}}>Buy now</button>
        </div>

        <div style={{textAlign:"center",border:"2px solid white",boxShadow:"1px 1px 5px ",borderRadius:"30px"}}>
        <img src={vanilla} alt="" width={"160px"} />
        <h5>Vanilla Flavour</h5>
        <button style={{borderRadius:"5px",backgroundColor:"black",color:"white",cursor:'pointer'}}>Buy now</button>
        </div>

        <div style={{textAlign:"center",border:"2px solid white",boxShadow:"1px 1px 5px ",borderRadius:"30px"}}>
        <img src={caramel} alt="" width={"160px"} />
        <h5>Caramel Flavour</h5>
        <button style={{borderRadius:"5px",backgroundColor:"black",color:"white",cursor:'pointer'}}>Buy now</button>
        </div>

        <div style={{textAlign:"center",border:"2px solid white",boxShadow:"1px 1px 5px ",borderRadius:"30px"}}>
        <img src={image1} alt="" width={"160px"} />
        <h5>Chocolate Flavour</h5>
        <button style={{borderRadius:"5px",backgroundColor:"black",color:"white",cursor:'pointer'}}>Buy now</button>
        </div>

        <div style={{textAlign:"center",border:"2px solid white",boxShadow:"1px 1px 5px ",borderRadius:"30px"}}>
        <img src={image1} alt="" width={"160px"} />
        <h5>Chocolate Flavour</h5>
        <button style={{borderRadius:"5px",backgroundColor:"black",color:"white",cursor:'pointer'}}>Buy now</button>
        </div>

        <div style={{textAlign:"center",border:"2px solid white",boxShadow:"1px 1px 5px ",borderRadius:"30px"}}>
        <img src={image1} alt="" width={"160px"} />
        <h5>Chocolate Flavour</h5>
        <button style={{borderRadius:"5px",backgroundColor:"black",color:"white",cursor:'pointer'}}>Buy now</button>
        </div>

        <div style={{textAlign:"center",border:"2px solid white",boxShadow:"1px 1px 5px ",borderRadius:"30px"}}>
        <img src={image1} alt="" width={"160px"} />
        <h5>Chocolate Flavour</h5>
        <button style={{borderRadius:"5px",backgroundColor:"black",color:"white",cursor:'pointer'}}>Buy now</button>
        </div>

        <div style={{textAlign:"center",border:"2px solid white",boxShadow:"1px 1px 5px ",borderRadius:"30px"}}>
        <img src={image1} alt="" width={"160px"} />
        <h5>Chocolate Flavour</h5>
        <button style={{borderRadius:"5px",backgroundColor:"black",color:"white",cursor:'pointer'}}>Buy now</button>
        </div>
      </div>
        </>
    )
}
export default Flavours