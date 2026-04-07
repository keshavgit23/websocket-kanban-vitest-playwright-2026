import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import KanbanBoard from "./components/KanbanBoard";
import Landing from "./pages/Landing";

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element = {
      <>
      <Landing/>
      </>
    }/>
    <Route path="/board" element={<KanbanBoard/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
