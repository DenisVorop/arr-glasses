import React from 'react'

import Header from './components/Header/Header'
import ChooseGlasses from './pages/ChooseGlasses/ChooseGlasses'

const App = () => {
  return (
    <div className="wrapper">
      <main>
        <Header />
        <ChooseGlasses />
      </main>
    </div>
  )
}

export default App
