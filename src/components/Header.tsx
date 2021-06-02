import { useContext } from 'react'
import styled from 'styled-components'
import ChuckNorrisImg from '../assets/chuck-norris-photo-lg.jpg'
import RandomUserPhoto from '../assets/random-user-photo.jpg'
import { GlobalContext } from '../components/GlobalContext'

const Header = () => {
  const { loading, data, firstName } = useContext(GlobalContext)
  return (
    <HeaderElement>
      <Image src={firstName.length < 1 ? ChuckNorrisImg : RandomUserPhoto} />
      {loading ? (
        <Quote>Loading...</Quote>
      ) : (
        <Quote dangerouslySetInnerHTML={{ __html: data.value.joke }}></Quote>
      )}
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
const Quote = styled('p')`
  font-size: 18px;
`
