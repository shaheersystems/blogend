import "./App.css";
import AppBar from "./components/AppBar";
import Home from "./Pages/Home";
import SavedPosts from "./Pages/Saved";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import Trending from "./Pages/Trending";
function App() {
  return (
    <div className="flex">
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SavedPosts" element={<SavedPosts />} />
        <Route path="/trending" element={<Trending />} />
      </Routes>
      <Sidebar />
    </div>
  );
}

export default App;
