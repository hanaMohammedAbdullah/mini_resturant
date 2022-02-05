import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Component/Header";
import Home from "./Screens/Home";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
