import React, { useContext } from 'react'
import styled from 'styled-components'
import ChuckNorrisImg from '../assets/chuck-norris-photo-lg.jpg'
import { GlobalContext } from '../components/GlobalContext'

const Header = () => {
  const { loading, data } = useContext(GlobalContext)

  return (
    <HeaderElement>
      <Image src={ChuckNorrisImg} />
      {loading ? <p>Loading...</p> : <Quote>{data.value.joke}</Quote>}
    </HeaderElement>
  )
}

export default Header

const HeaderElement = styled('header')`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-content: center;
`
const Image = styled('img')`
  max-width: auto;
`
const Quote = styled('p')``
