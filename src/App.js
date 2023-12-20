import Home from "./Pages/Home";
import Room from "./Pages/Room";
import Restaurent from "./Pages/Restaurent";
import SingleRoom from "./Pages/SingleRoom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { Routes, Route } from "react-router-dom";




function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" component={Home} element={<Home />} />
        <Route exact path="/rooms/" component={Room} element={<Room />} />
        <Route exact path="/restaurent" component={Restaurent} element={<Restaurent />} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route component={Error} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
