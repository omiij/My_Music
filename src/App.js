import "./App.css";
import Back from "./Header/Back";

import Header from "./Header/Header";
// import { Router } from "react-router-dom";
// import SignUp from "./Sign-Up Form/Form";

import { BrowserRouter as Router } from "react-router-dom";

import Footer from "./Footer/Footer";
import {
  Singer1,
  Bakk1,
  Pitb1,
  Jeni1,
  Radf1,
  Mar1,
  Alex1,
  Akc1,
  Yankee1,
  Char1,
  Kish1,
  Bru1,
  Tay1,
  Jub1,
  SignUp,
} from "./Artists.js/All_Pages_Route/Route";
// import { Singer } from "./Artists.js/All_Pages_Route/Pages";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Bakk1 />
      </Router>
      <Router>
        <Singer1 />
      </Router>
      <Router>
        <SignUp />
      </Router>
      <Router>
        <Pitb1 />
      </Router>
      <Router>
        <Jeni1 />
      </Router>
      <Router>
        <Radf1 />
      </Router>
      <Router>
        <Mar1 />
      </Router>
      <Router>
        <Alex1 />
      </Router>
      <Router>
        <Akc1 />
      </Router>
      <Router>
        <Yankee1 />
      </Router>
      <Router>
        <Char1 />
      </Router>
      <Router>
        <Kish1 />
      </Router>
      <Router>
        <Bru1 />
      </Router>
      <Router>
        <Tay1 />
      </Router>
      <Router>
        <Jub1 />
      </Router>
      <Footer />
    </>
  );
}

export default App;
