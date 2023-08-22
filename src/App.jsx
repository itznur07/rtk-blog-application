import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Post from "./pages/Post/Post";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/post' element={<Post />} />
          <Route path='/post/:id' element={<Post />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
