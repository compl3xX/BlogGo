import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SignIn, SignUp } from "./pages";
import { NavBar } from "./components";




function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
