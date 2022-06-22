import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header'

import ChooseGlasses from './pages/ChooseGlasses/ChooseGlasses'
import Home from './pages/Home/Home'

import FirstLoadPage from './pages/FirstLoadPage/FirstLoadPage' // TODO

const App = () => {
  return (
    <div className="wrapper">
      <main>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="/clients" element={<ChooseGlasses />} />
          </Route>
          <Route path="/arr-glasses" element={<FirstLoadPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
