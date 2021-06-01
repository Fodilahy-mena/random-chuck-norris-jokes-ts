import React, { ChangeEvent, useContext, useState } from 'react'
import { GlobalContext } from '../components/GlobalContext'

const MainCharacterInput: React.FC = () => {
  const { updateFirstName, updateLastName } = useContext(GlobalContext)
  const [mainCharacter, setMainCharacter] = useState('')
  const [first, last] = mainCharacter.split(/\s+(.*)/)

  function changeMainCharacter(event: ChangeEvent<HTMLInputElement>) {
    setMainCharacter(event.target.value)
    updateFirstName(first)
    updateLastName(last)
  }
  return (
    <div>
      <input onChange={changeMainCharacter} />
    </div>
  )
}

export default MainCharacterInput
