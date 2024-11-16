import {BrowserRouter as  Router,Routes,Route } from "react-router-dom"
import OnBoarding from "./component/OnBoarding"
import Home from "./component/Home"
function App() { 
  
  return (
    <Router basename="/PortfolioRiad">
      <Routes>
        <Route path="/" element={<OnBoarding/>} />
        <Route path="/home" element={<Home/>} />

      </Routes>
    </Router>
      
    
    
    )
}

export default App
