import image1 from "./assets/image2.png"
import { FaLongArrowAltRight } from "react-icons/fa";
export function Home() {
    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div>
                    <p>FUEL THE GRIND OWN THE SHADOW</p>
                    <h1 style={{fontSize:"50px",marginTop:"0px"}}>SHADOW <br /><span style={{ marginTop: "0px",color:"orange", }}>SCOOP</span></h1>
                    <p>PREMIUM WHEY PROTEIN <br />BUILD FOR RESULTS</p>
                    <div style={{ display: "flex",gap:"15px" }}>
                        <span>25G <br />PROTEIN
                        </span>
                        <span>5.5G <br />BCAAs
                        </span>
                        <span>ZERO <br />ADDED SUGAR
                        </span>
                    </div>
                    <div>
                        <button style={{ color: "white", backgroundColor: "orange", border: "none" ,padding:"10px",borderRadius:"3px"}}>SHOP NOW <FaLongArrowAltRight /></button>
                        <button style={{ color: "white", backgroundColor: "black", border:"2px solid orange",padding:"10px",borderRadius:"3px",margin:"20px"}}>LEARN MORE</button>
                    </div>
                </div>

                <img src={image1} alt="" width={"600px"} height={"400px"} />
            </div>
        </>
    )
}