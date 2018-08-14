import React from 'react';
import { Link } from 'react-router-dom'
import { ListGroup, ListGroupItem } from 'reactstrap';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
import classie from './js/classie';
import './style.scss';

/*const Aside = ({ item }) => {
  return (
    <div>
      <Button color='primary' id='toggler' style={{ marginBottom: '1rem' }}>
        Toggle
  </Button>
      <UncontrolledCollapse toggler='#toggler'>
        <aside>
          <ListGroup>
            {
              item.map(item => (
                <ListGroupItem><Link to={{ pathname: `/details/${item.id}`, state: { url: item.id } }}>{item.caption}</Link></ListGroupItem>
              ))
            }
          </ListGroup>
        </aside>
      </UncontrolledCollapse>
    </div>
  )
}

export default Aside;*/


/*const Aside = ({ item }) => {
  return (
    <div>
      <div className='main'>
        <section className='buttonset'>
          <button id='showLeftPush'>Show/Hide Left Push Menu</button>
        </section>
      </div>
      <nav className='cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left' id='cbp-spmenu-s1'>
        <h3>Menu</h3>
        {
          item.map(item => (
            <Link to={{ pathname: `/details/${item.id}`, state: { url: item.id } }}>{item.caption}</Link>
          ))
        }
      </nav>
    </div>
  )
}

prueba = () => {
  var menuLeft = document.getElementById('cbp-spmenu-s1'),
    showLeftPush = document.getElementById('showLeftPush'),
    body = document.body;
}


showLeftPush.onclick = function () {
  classie.toggle(this, 'active');
  classie.toggle(body, 'cbp-spmenu-push-toright');
  classie.toggle(menuLeft, 'cbp-spmenu-open');
  disableOther('showLeftPush');
};

export default Aside;*/


class Aside extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      items: this.props.item,
      site: ''
    }
    console.log(this.state.items)
  }



  /*componentDidMount() {
    var menuLeft = document.getElementById('cbp-spmenu-s1'),
      showLeftPush = document.getElementById('showLeftPush');

    showLeftPush.onclick = function () {

      if (!(menuLeft.classList.contains('cbp-spmenu-open'))) {
        //menuLeft.classList.remove('cbp-spmenu-left')
        menuLeft.classList.add('cbp-spmenu-open')
      } else {
        menuLeft.classList.remove('cbp-spmenu-open')
      }


    };
  }*/

  render() {
    const { items } = this.state;
    return (
      <div>
        <div className='main'>
        </div>
        <nav className='cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left' id='cbp-spmenu-s1'>
          <h3>International Leagues</h3>
          {
            items.map(items => (
              <Link key={items.id} to={{ pathname: `/details/${items.id}`, state: { url: items.id } }}>{items.caption}</Link>
            ))
          }
        </nav>
      </div>
    );
  }
}

export default Aside;