import "./App.css";
import React ,{lazy,Suspense}from 'react'
// import Home from "./Home";
// import Profile from "./Profile";
const Home=React.lazy(()=>import("./Home"));
const Profile=React.lazy(()=>import("./Profile"));
//import {BrowserRouter as Router, Routes,Route} from "react-router-dom";

//import Headers from "./Headers";
function App() {
 
  return (
    <div className="App">
      <Suspense>
        <Home/>
      </Suspense>
      <Suspense fallback={<div>Loading</div>}>
        <Profile/>
      </Suspense>

      {/* <Router className="header">
        <Headers/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/profile" element={  <Profile/>}/>
        </Routes>
      </Router> */}
      
    
   
    </div>
  );
}

export default App;
