import "./App.css";
import AppBar from "./components/AppBar";
import Home from "./Pages/Home";
import SavedPosts from "./Pages/SavedPosts";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="flex">
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SavedPosts" element={<SavedPosts />} />
      </Routes>
    </div>
  );
}

export default App;
