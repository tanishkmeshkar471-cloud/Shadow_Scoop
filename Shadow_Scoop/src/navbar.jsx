import logo from"./assets/logo.png" 
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { Link} from "react-router-dom";
import { FaOpencart } from "react-icons/fa";
function Navbar(){
    return(
        <>
        <nav style={{display:"flex",justifyContent:"space-around",alignItems:"center",color:"white",fontSize:"10px"}}>
            <h1><img src={logo} alt="" width="100px" /></h1>
            <ul style={{display:"flex",listStyle:"none",gap:"50px"}}>
                
                <li><Link to={"/home"} style={{color:"white",textDecoration:"none"}}> Home </Link></li>
                <li><Link to={"/shop"}style={{color:"white",textDecoration:"none"}}> Shop </Link></li>
                <li><Link to={"/about"}style={{color:"white",textDecoration:"none"}}> About us </Link></li>
                <li><Link to={"/ingredients"}style={{color:"white",textDecoration:"none"}}> Ingredients </Link></li>
                <li><Link to={"/contact"}style={{color:"white",textDecoration:"none"}}> Contact </Link></li>
                <li><Link to={"/reviews"}style={{color:"white",textDecoration:"none"}}> Reviews </Link></li>
                
            </ul>
            <ul style={{display:"flex",listStyle:"none",gap:"20px"}}>
                <li ><CiSearch style={{fontSize:"20px"}}/></li>
                <li><CgProfile style={{fontSize:"20px"}}/></li>
                <li><FaOpencart style={{fontSize:"20px"}}/></li>
            </ul>
        </nav>
        </>
    )
}
export default Navbar