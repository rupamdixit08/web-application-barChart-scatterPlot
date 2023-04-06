import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import ScatterPlot from "./components/ScatterPlot";
import BarGraph from "./components/BarGraph";

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ScatterPlot />} />
        <Route path="/bargraph" element={<BarGraph />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
