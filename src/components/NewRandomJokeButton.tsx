import React, { useContext } from 'react'
import { GlobalContext } from '../components/GlobalContext'

const NewRandomJokeButton: React.FC = () => {
  const { getNewRandomJoke, firstName, lastName } = useContext(GlobalContext)
  return (
    <button onClick={getNewRandomJoke}>
      Draw a random {firstName && firstName} {lastName && lastName} joke
    </button>
  )
}

export default NewRandomJokeButton
