import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import HomeRoute from "./route/HomeRoute";
import { Provider } from "./context/context";

function App() {
  useEffect(() => {
    // getData();
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Provider>
          <HomeRoute />
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
