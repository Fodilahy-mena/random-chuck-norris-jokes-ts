import React from 'react'
interface Props {
  jokesToSave: []
  addJokeToSave: () => void
  removeJokeToSave: () => void
}
const Categories: React.FC<Props> = ({
  jokesToSave,
  addJokeToSave,
  removeJokeToSave,
}) => {
  return (
    <div>
      <button onClick={removeJokeToSave}>-</button>
      <p>0</p>
      <button onClick={addJokeToSave}>+</button>
    </div>
  )
}
