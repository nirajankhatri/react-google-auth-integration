import "./App.css";
import Navbar from "./components/nav/Navbar";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import { userProfileContext } from "./contexts/contexts";
import { useState } from "react";

function App() {
  const [userProfile, setUserProfile] = useState(null);

  return (
    <userProfileContext.Provider value={{ userProfile, setUserProfile }}>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </div>
    </userProfileContext.Provider>
  );
}

export default App;
