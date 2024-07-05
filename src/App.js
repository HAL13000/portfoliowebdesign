// import logo from "./logo.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Index from "./pages/Index/Index";
import About from "./pages/About/About";
import { ThemeProvider } from "./components/ThemeColor/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<Index />} />
            <Route path={"/about"} element={<About />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
