import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Home from "./Screens/Home";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
