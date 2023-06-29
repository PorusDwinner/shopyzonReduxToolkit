import { BrowserRouter , Routes , Route } from "react-router-dom";
import Topbar from "./components/Topbar";
import Home from "./page/Home";
import Wishlist from "./page/Wishlist";
import Cart from "./page/Cart";
import Login from "./page/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Topbar/>
        <Routes>
          <Route exact path="/user-login" element = {<Login/>} />
          <Route exact path="/" element = {<Home/>} />
          <Route exact path="/your-wishlist" element = {<Wishlist/>} />
          <Route exact path="/your-cart" element = {<Cart/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
