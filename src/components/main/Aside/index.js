import React from 'react';
import { Link } from 'react-router-dom'

const Aside = ({ item }) => {
  
  return (
    <aside>
      <ul>
        {
          item.map(item => (
            <li key={item.id}><Link to={{ pathname: `/details/${item.id}`, state: { url: item.id } }}>{item.caption}</Link></li>
          ))
        }
      </ul>
    </aside>

  )
}

export default Aside;