// react imports
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// component imports
import TopBar from "./Components/Topbar/TopBar";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home"

import Ug from "./Stages/Ug";
import Pg from "./Stages/Pg";
import PhD from "./Stages/PhD";
import Certificate from "./Stages/Certificate";
import Diploma from "./Stages/Diploma";

import ProgrammePage from "./Components/ProgrammePage/ProgrammePage";

function App() {

    const progMap= require("./database/progmap.json")

    return(
      <Router>
          <TopBar heading="Syllabus Web"/>

          <Routes>
              <Route path="/SyllabusWeb" element={<Home />}></Route>
              <Route path="/programmes/ug" element={<Ug />}></Route>
              <Route path="/programmes/pg" element={<Pg />}></Route>
              <Route path="/programmes/phd" element={<PhD />}></Route>
              <Route path="/programmes/certificate" element={<Certificate />}></Route>
              <Route path="/programmes/diploma" element={<Diploma />}></Route>
              
              {/* {
                  progMap.map(
                      (progname, progpath) =>
                            <Route path={progname} element={<ProgrammePage jsonData= {require(progpath)} />} />
                  )
              } */}

              <Route path="/programmes/ug/bscHcs" element={<ProgrammePage jsonData= {require('./database/programmes/bscHcs.json')}/>}></Route>
              <Route path="/programmes/ug/bscHanthro" element={<ProgrammePage jsonData= {require('./database/programmes/bscHanthro.json')}/>}></Route>
              <Route path="/programmes/ug/bscHbiochem" element={<ProgrammePage jsonData= {require('./database/programmes/bscHbiochem.json')}/>}></Route>
              <Route path="/programmes/ug/bscHbiomed" element={<ProgrammePage jsonData= {require('./database/programmes/bscHbiomed.json')}/>}></Route>
              <Route path="/programmes/ug/bscHbiosci" element={<ProgrammePage jsonData= {require('./database/programmes/bscHbiosci.json')}/>}></Route>
              <Route path="/programmes/ug/bscHbotany" element={<ProgrammePage jsonData= {require('./database/programmes/bscHbotany.json')}/>}></Route>
              <Route path="/programmes/ug/bscHchem" element={<ProgrammePage jsonData= {require('./database/programmes/bscHchem.json')}/>}></Route>
              <Route path="/programmes/ug/bscHelec" element={<ProgrammePage jsonData= {require('./database/programmes/bscHelec.json')}/>}></Route>
              <Route path="/programmes/ug/bscHmath" element={<ProgrammePage jsonData= {require('./database/programmes/bscHmath.json')}/>}></Route>
              <Route path="/programmes/ug/bscHphysics" element={<ProgrammePage jsonData= {require('./database/programmes/bscHphysics.json')}/>}></Route>

          </Routes>

          <Footer />
      </Router>
    );
}

export default App;