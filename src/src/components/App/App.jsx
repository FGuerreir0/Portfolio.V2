import Footer from "../Footer/Footer";
//import Contact from "../Contact/Contact";
import "./app.css";
//import Navbar from "../Navbar/Navbar";
//import { Link } from "react-router-dom";
import CardFlip from "../CardFlip/CardFlip";


function App() {
  return (
    <div className="app">
      <div className="app__content">
        <CardFlip />
      </div>
      <div className="app__footer">
        <Footer/>  
      </div>
    </div>
  );
}

export default App;
