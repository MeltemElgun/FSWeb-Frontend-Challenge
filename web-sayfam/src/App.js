import axios from "axios";
import React, { useEffect, useState } from "react";

import Introduce from "./components/Introduce";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "@fontsource/inter";
function App() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/projects")
      .then((res) => {
        if (res.status === 200) {
          setProjects(res.data);
        }
        console.log(res);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="App">
      <Introduce />
      <Skills />
      <Profile />
      {projects.map((project) => (
        <Projects key={project.id} pr={project} />
      ))}

      <Footer />
    </div>
  );
}

export default App;
