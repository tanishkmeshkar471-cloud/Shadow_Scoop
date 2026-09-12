import { Route, Routes } from "react-router-dom";
import Navbar from "./navbar";
import { Home } from "./Home";
import Shop from "./shop";
import About from "./about";
import Ingredients from "./ingredients";
import Contact from "./contact";
import Reviews from "./reviews";
import Layout from "./layout";

function App(){
    return(
        <>
        <Routes>
            <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/ingredients" element={<Ingredients />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/reviews" element={<Reviews />} />
            </Route>
        </Routes>
        </>
    )
}
export default App