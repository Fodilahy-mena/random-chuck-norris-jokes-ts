import React, { useState, useContext } from 'react'
import { GlobalContext } from '../components/GlobalContext'

const Categories: React.FC = () => {
  const { category, setCategory } = useContext(GlobalContext)
  const [categories] = useState(['nerdy', 'explicit'])
  return (
    <div>
      <p>{category.length < 1 ? 'Categories' : category}</p>
      <ul>
        {categories.map((cat) => (
          <li onClick={() => setCategory(cat)} key={cat}>
            {cat}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Categories
