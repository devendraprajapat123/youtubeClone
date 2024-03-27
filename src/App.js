import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./Pages/HomePage/Home";
import Video from "./Pages/Video/Video";
import { useState } from "react";



function App() {
  const [sidebar,setSidebar] = useState(true)
  return (
    <div className="App">
      <BrowserRouter>
      
        <Navbar setSidebar={setSidebar} />
        <Routes>
          <Route path="/" element={<Home sidebar={sidebar}/>}></Route>
          <Route path="/video/:categoryId/:videoId" element={<Video />}></Route>

        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
