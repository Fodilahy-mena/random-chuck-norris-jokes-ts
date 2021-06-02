import React, { useContext, useState } from 'react'
import { GlobalContext } from '../components/GlobalContext'

export const SaveButton: React.FC = () => {
  const { savedJokes, addToDownloads, downloads, removeFromDownloads } =
    useContext(GlobalContext)
  const [indexConter, setIndexCounter] = useState(0)

  function getRandomJokeToDownload() {
    const download = savedJokes.find((joke, index) => index === indexConter)
    if (download) {
      addToDownloads(download)
    }
    if (savedJokes.length > indexConter) {
      setIndexCounter(indexConter + 1)
    }
  }

  function removeRandomJokeFromDownloads() {
    const download = savedJokes.find((joke, index) => index === indexConter)
    if (downloads.length >= indexConter && indexConter > 0) {
      setIndexCounter(indexConter - 1)
    }

    if (download) {
      removeFromDownloads(download, indexConter)
    }
  }

  function downloadJokes() {
    if (downloads.length > 0) {
      alert(
        `You have: ${downloads.length} Chuck Norris Jokes, but there is no functionality for downloading them yet.`
      )
    }
  }
  return (
    <div>
      <div>
        <button onClick={removeRandomJokeFromDownloads}>-</button>
        <span>{downloads.length}</span>
        <button onClick={getRandomJokeToDownload}>+</button>
      </div>
      <button onClick={downloadJokes}>Save Jokes</button>
    </div>
  )
}

export default SaveButton
