import React from 'react';
import MyCarousal from "./components/my-carousal/my-carousal.component.jsx"
import MyNavBar from "./components/my-navbar/mynavbar.component";
import MyTitle from "./components/my-title/my-title.component.jsx"
import './App.css';
import About from './pages/about/about.component'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import { Parallax, Background } from 'react-parallax';
import Container from 'react-bootstrap/esm/Container';
import Skills from "./pages/skills/skills.component.jsx";
import Zoom from "react-reveal/Zoom"
import  Experience  from "./pages/experience/my-experience.component.jsx";
import Projects from './pages/projects/my-projects.component.jsx';
const App = () =>  {
  return (<div> 
    <MyNavBar></MyNavBar>
    <MyCarousal></MyCarousal>
    <MyTitle></MyTitle>
    <div>
      <Parallax
            blur={{ min: -30, max: 30 }}
            bgImage={require("./assets/img/parallex/background.webp")}
            bgImageAlt=""
            strength={-200}>
              <div>
            <Container className="container-box rounded">
              <Fade duration={5000}>
                <About />
              </Fade>
            </Container>
            </div>
      </Parallax>
    </div>
    <Container className="container-box rounded">
        <Zoom  duration={1000}>
          <hr />
          <Skills />
        </Zoom>
      </Container>
      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />
            <Experience />
          </Fade>
        </Container>
      </div>
      <div>
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <Projects />
        </Slide>
      </Container>
      </div>



    </div>
    )
  
};

export default App;
