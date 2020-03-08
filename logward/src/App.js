import React from "react";
import Navbar from "./components/Navbar.js";
import "./App.css";
import ReleaseTable from "./components/ReleaseTable.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ReleaseTable />
    </div>
  );
}

export default App;
