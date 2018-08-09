import React from 'react';
import { Link } from 'react-router-dom'

import detail from '../../../containers/Details/';

const Aside = ({ item }) => {
  item.map(item => console.log(item._links.leagueTable.href))
  return (
    <div className='container-fluid'>
      <div className="row">
        <aside>
          <ul>
            {
              item.map(item => (
                
                <li key={item.id}>
                  {item.caption}
                </li>
              ))
            }
          </ul>
        </aside>
      </div>
    </div>
  )
}

export default Aside;