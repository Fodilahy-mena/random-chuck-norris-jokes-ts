import React, { ChangeEvent, useContext } from 'react'
import { GlobalContext } from '../components/GlobalContext'

const MainCharacterInput: React.FC = () => {
  const { updateFirstName, updateLastName } = useContext(GlobalContext)

  function changeMainCharacter(event: ChangeEvent<HTMLInputElement>) {
    const [first, last] = event.target.value.split(/\s+(.*)/)
    updateFirstName(first)
    updateLastName(last !== undefined ? last : '')
  }

  return (
    <div>
      <input onChange={changeMainCharacter} />
    </div>
  )
}

export default MainCharacterInput
