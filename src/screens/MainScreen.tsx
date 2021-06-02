import React from 'react'
import Header from '../components/Header'
import Categories from '../components/Categories'
import MainCharacterInput from '../components/MainCharacterInput'
import NewRandomJokeButton from '../components/NewRandomJokeButton'
import { SaveButton } from '../components/SaveButton'
import styled from 'styled-components'
const MainScreen = () => {
  return (
    <Container>
      <Header />
      <main>
        <Categories />
        <MainCharacterInput />
        <NewRandomJokeButton />
        <SaveButton />
      </main>
    </Container>
  )
}

export default MainScreen

const Container = styled('div')`
  width: 555px;
  margin-top: 48px;
  margin-left: auto;
  margin-right: auto;
`
