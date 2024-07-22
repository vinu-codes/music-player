import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LandingPage } from '@pages/Landing'

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
    </Routes>
  </Router>
)

export { App }
