import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import  "/public/style.css";
import Note from "./Note";
function App(){
  return (
  <div>
    <Header />
    <Note />
    <Note />
    <Note />
    <Note />
    <Footer /> 
  </div>
  );
}

export default App;