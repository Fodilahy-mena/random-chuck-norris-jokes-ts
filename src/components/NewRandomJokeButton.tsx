import React, { useContext } from 'react'
import { GlobalContext } from '../components/GlobalContext'

const NewRandomJokeButton: React.FC = () => {
  const { data, getNewRandomJoke, firstName, lastName, saveNewRandomJoke } =
    useContext(GlobalContext)

  return (
    <button
      onClick={() => {
        getNewRandomJoke()
        saveNewRandomJoke(data)
      }}>
      Draw a random {firstName && firstName} {lastName && lastName} joke
    </button>
  )
}

export default NewRandomJokeButton
