import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CreatePost, Home, SignIn, SignUp } from "./pages";
import { NavBar } from "./components";






function App() {
  return (
    <div className="main_container">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path='/home' element={<Home />} />
          <Route path='/createpost' element={<CreatePost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
