import React from 'react';
import MyCarousal from "./components/my-carousal/my-carousal.component.jsx"
import MyNavBar from "./components/my-navbar/mynavbar.component";
import MyTitle from "./components/my-title/my-title.component.jsx"
import './App.css';

const App = () =>  {
  return (<div> 
    <MyNavBar></MyNavBar>
    <MyCarousal></MyCarousal>
    <MyTitle></MyTitle>
    </div>
    )
  
};

export default App;
