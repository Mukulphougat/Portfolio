import './App.css';
import {BrowserRouter as Router} from "react-router-dom"

import Nav from "./Pages/Nav";
import AnimatedRoutes from "./AnimatedRoutes";

function App() {
  return (
      <Router>
          <div className="App">
              <Nav />
              <AnimatedRoutes />
          </div>
      </Router>

  );
}

export default App;
