import "./App.css";
import JourneyList from "./components/JourneyList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FrontPage from "./components/FrontPage";
import StationList from "./components/StationList";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/journey" element={<JourneyList />} />
          <Route path="/station" element={<StationList/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
