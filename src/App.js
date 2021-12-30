// react imports
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// component imports
import TopBar from "./Components/Topbar/TopBar";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home"
import Ug from "./Stages/Ug";
import Pg from "./Stages/Pg";
import BscHCS from "./Programmes/bscHCS/bscHCS";

function App() {
    return(
      <Router>
          <TopBar heading="Syllabus Web"/>

          <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/ug" element={<Ug />}></Route>
              <Route path="/ug/bschcs" element={<BscHCS />}></Route>
              <Route path="/pg" element={<Pg />}></Route>
          </Routes>

          <Footer />
      </Router>
    );
}

export default App;