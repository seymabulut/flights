import React from "react";
import "./App.css";
import Routing from "./routing";

function App() {
  return (
    <div>
      <div className="app_header">
        <div className="text">
          <span>turkishairlines.com</span>
          <span>search Flight Challenge</span>
        </div>
        <hr />
      </div>

      <Routing />
    </div>
  );
}

export default App;
