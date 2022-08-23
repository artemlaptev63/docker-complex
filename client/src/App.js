import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import {OtherPage} from "./OtherPage"
import {Fib} from "./Fib"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Link to={"/"}>Home</Link>
          <Link to={"/other-page"}>OtherPage</Link>
        </header>
        <Routes>
          <Route path={"/other-page"} element={<OtherPage/>}/>
          <Route path={"/"} element={<Fib/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
