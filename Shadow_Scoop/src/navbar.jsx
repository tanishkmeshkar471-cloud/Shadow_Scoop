import logo from"./assets/logo.png" 
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { Link} from "react-router-dom";
function Navbar(){
    return(
        <>
        <nav style={{display:"flex",justifyContent:"space-around",alignItems:"center",color:"white"}}>
            <h1><img src={logo} alt="" width={150} /></h1>
            <ul style={{display:"flex",listStyle:"none",gap:"50px"}}>
                
                <li><Link to={"/home"} style={{color:"white",}}> Home </Link></li>
                <li><Link to={"/shop"}> Shop </Link></li>
                <li><Link to={"/about"}> About us </Link></li>
                <li><Link to={"/ingredients"}> Ingredients </Link></li>
                <li><Link to={"/contact"}> Contact </Link></li>
                <li><Link to={"/reviews"}> Reviews </Link></li>
                
            </ul>
            <ul style={{display:"flex",listStyle:"none",gap:"20px"}}>
                <li ><CiSearch style={{fontSize:"30px"}}/></li>
                <li><CgProfile style={{fontSize:"30px"}}/></li>
            </ul>
        </nav>
        </>
    )
}
export default Navbar