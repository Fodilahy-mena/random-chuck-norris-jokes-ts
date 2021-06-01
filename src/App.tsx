import React from 'react'
import MainScreen from './screens/MainScreen'
import './App.css'
import { GlobalProvider } from './components/GlobalContext'

function App() {
  return (
    <GlobalProvider>
      <MainScreen />
    </GlobalProvider>
  )
}

export default App
