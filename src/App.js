import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Experience from "./Components/Experience";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import Home from "./Components/Home";
import Navigation from "./Components/Navigation";
import About from "./Components/About";
import "antd/dist/antd.css";

import { Tabs } from "antd";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}
function App() {
  return (
    <div className="App">
      {/* <Navigation /> */}
      {/* <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/" element={<Home />} />
      </Routes> */}

      <Tabs defaultActiveKey="1" onChange={callback} centered>
        <TabPane tab="Home" key="1">
          <Home />
        </TabPane>
        <TabPane tab="About" key="2">
          <About />
        </TabPane>
        <TabPane tab="Skillset" key="3">
          <Experience />
        </TabPane>
        <TabPane tab="Work" key="4">
          <Projects />
        </TabPane>
        <TabPane tab="Contact" key="5">
          <Contact />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default App;
