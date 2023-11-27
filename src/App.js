import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Page/Header";
import Home from "./Page/Home";
import Blogs from "./Page/Blogs";
import Contact from "./Page/Contact";
import './App.css'

function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
        
        </Route>
      </Routes>
    
    </>
  );
}
export default App;
