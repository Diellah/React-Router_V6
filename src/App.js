import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Header from "./components/layout/Header";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Helmet>
        <title>ReactRouter App</title>
      </Helmet>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
