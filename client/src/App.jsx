import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import About from "./pages/About"
import Profile from "./pages/Profile"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sign-in" element={<SignIn/>}/>
        <Route path="/sign-out" element={<SignUp/>}/>
        <Route path="/sign-out" element={<About/>}/>
        <Route path="/sign-out" element={<Profile/>}/>
      </Routes>
    </Router>
  )
}

export default App