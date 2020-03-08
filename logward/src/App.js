import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import ReleaseTable from "./components/ReleaseTable";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ReleaseTable />
    </div>
  );
}

export default App;
