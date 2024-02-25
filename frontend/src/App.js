import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CreatePost, DetailedPost, Home, SignIn, SignUp, UserProfile } from "./pages";
import { NavBar } from "./components";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";



function App() {
  return (
    <div className="main_container">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path='/home'
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>}
          />
          <Route path='/createpost' element={<CreatePost />} />
          <Route path='/userprofile' element={<UserProfile />} />
          <Route path='/post/:id' element={<DetailedPost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
