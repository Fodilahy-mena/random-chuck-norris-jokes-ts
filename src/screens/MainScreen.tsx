import React, { useContext } from 'react'
import Header from '../components/Header'
import Categories from '../components/Categories'
import MainCharacterInput from '../components/MainCharacterInput'
import NewRandomJokeButton from '../components/NewRandomJokeButton'
import ButtonSave, { SaveButton } from '../components/SaveButton'

const MainScreen = () => {
  return (
    <>
      <Header />
      <main>
        <Categories />
        <MainCharacterInput />
        <NewRandomJokeButton />
        <SaveButton />
      </main>
    </>
  )
}

export default MainScreen
