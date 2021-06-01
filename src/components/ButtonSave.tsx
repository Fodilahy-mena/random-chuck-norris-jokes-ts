import React from 'react'
interface Props {
  text: string
  saveJokes: () => void
}
export const SaveButton: React.FC<Props> = ({ text, saveJokes }) => {
  return <button onClick={saveJokes}>{text}</button>
}
