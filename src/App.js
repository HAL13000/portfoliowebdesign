// import logo from "./logo.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Index from "./pages/Index/Index";
import About from "./pages/About/About";
import { ThemeProvider } from "./components/ThemeColor/ThemeContext";
import { Project } from "./pages/ProjectCase/ProjectCase";
import TestPage from "./pages/test/test";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<Index />} />
            <Route path={"/about"} element={<About />} />
            <Route path={"/project"} element={<Project />} />
            <Route path={"/test"} element={<TestPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
