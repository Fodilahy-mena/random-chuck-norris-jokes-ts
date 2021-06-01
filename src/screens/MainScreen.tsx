import React, { useContext } from 'react'
import Header from '../components/Header'
import Categories from '../components/Categories'
import MainCharacterInput from '../components/MainCharacterInput'
import NewRandomJokeButton from '../components/NewRandomJokeButton'

const MainScreen = () => {
  return (
    <>
      <Header />
      <Categories />
      <MainCharacterInput />
      <NewRandomJokeButton />
    </>
  )
}

export default MainScreen
