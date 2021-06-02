import React, { useContext } from 'react'
import { GlobalContext } from '../components/GlobalContext'

export const SaveButton: React.FC = () => {
  const { data, savedJokes } = useContext(GlobalContext)

  return (
    <div>
      <div>
        <button>-</button>
        <span>{savedJokes.length}</span>
        <button>+</button>
      </div>
      <button>Save Jokes</button>
    </div>
  )
}

export default SaveButton
