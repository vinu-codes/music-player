import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const LandingPage = () => {
  return (<div>Hello World</div>)
}
const App = () => (
  
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
         </Routes>
      </Router>
)

export { App }
