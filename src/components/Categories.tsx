import React, { useState, useContext } from 'react'
import { GlobalContext } from '../components/GlobalContext'
import styled from 'styled-components'
const Categories: React.FC = () => {
  const { category, setCategory } = useContext(GlobalContext)
  const [categories] = useState(['nerdy', 'explicit'])
  return (
    <div>
      <Category>{category.length < 1 ? 'Categories' : category}</Category>
      <List>
        {categories.map((cat) => (
          <Item onClick={() => setCategory(cat)} key={cat}>
            {cat}
          </Item>
        ))}
      </List>
    </div>
  )
}

export default Categories

const List = styled('ul')`
  padding: 0;
  list-style: none;
`

const Item = styled('li')`
  text-transform: capitalize;
`

const Category = styled('p')`
  text-transform: capitalize;
`
