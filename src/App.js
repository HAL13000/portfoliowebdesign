// import logo from "./logo.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Index from "./pages/Index/Index";
import About from "./pages/About/About";
import { ThemeProvider } from "./components/ThemeColor/ThemeContext";
import { Project } from "./pages/ProjectCase/ProjectCase";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<Index />} />
            <Route path={"/about"} element={<About />} />
            <Route path={"/project"} element={<Project />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
