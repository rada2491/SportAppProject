import React from 'react';
import { Link } from 'react-router-dom'

const Aside = ({ item }) => {
  item.map(item => console.log(item._links.leagueTable.href))
  return (
    <aside>
      <ul>
        {
          item.map(item => (
            <li key={item.id}><Link to={{ pathname: '/details', state: { url: item._links.leagueTable.href } }}>{item.caption}</Link></li>
          ))
        }
      </ul>
    </aside>

  )
}

export default Aside;