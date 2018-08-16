import React from 'react';
import { Link } from 'react-router-dom'
import './style.scss';

/*class Aside extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      items: this.props.item,
      site: ''
    }
  }

  render() {
    const { items } = this.state;*/
const Aside = ({ item }) => {
  return (
    <div>
      <div className='main'>
      </div>
      <nav className='cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left' id='cbp-spmenu-s1'>
        <h3>International Leagues</h3>
        {
          item.map(items => (
            <Link key={items.id} to={{ pathname: `/details/${items.id}`, state: { url: items.id } }}>{items.caption}</Link>
          ))
        }
      </nav>
    </div>
  );
}

export default Aside;