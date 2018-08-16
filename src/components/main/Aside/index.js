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
const Aside = ({items}) => {
  //const { items } = this.props
  return (


    <Link key={items.id} to={{ pathname: `/details/${items.id}`, state: { url: items.id } }}>{items.caption}</Link>


  );
}

export default Aside;