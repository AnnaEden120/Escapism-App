import "./App.css";
import { Routes, Route } from "react-router-dom";
import MyList from "./MyList";
import Home from "./Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mylist" element={<MyList />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
