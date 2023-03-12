import "./App.css";
import { GoogleLogin } from "@react-oauth/google";
import Navbar from "./components/nav/Navbar";
import { Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";

function App() {
  const responseMessage = (response) => {
    console.log(response);
  };

  const errorMessage = (error) => {
    console.log(error);
  };

  return (
    <div className="App">
      <Navbar />
      <h2>React Google Login</h2>
      <Routes>
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
