import React from 'react'
import MainScreen from './screens/MainScreen'
import './App.css'
import { GlobalProvider } from './components/GlobalContext'

function App() {
  return (
    <div className='App'>
      <GlobalProvider>
        <MainScreen />
      </GlobalProvider>
    </div>
  )
}

export default App
