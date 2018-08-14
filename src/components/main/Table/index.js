import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';



const columns = [{
  dataField: 'position',
  text: 'Position'
}, {
  dataField: 'teamName',
  text: 'Team Name',
  sort: true
}, {
  dataField: 'points',
  text: 'Points',
  sort: true
},{
  dataField: 'wins',
  text: 'Wins',
  sort: true
},{
  dataField: 'goals',
  text: 'Goals',
  sort: true
},{
  dataField: 'goalsAgainst',
  text: 'Goals Against',
  sort: true
}];

export default ({ state }) => {
  const products = state
  return (
    <BootstrapTable keyField='id' data={products} columns={columns} />
  )
}

