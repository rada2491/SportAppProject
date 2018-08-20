import React, { Component } from 'react';
import LeagueTable from '../../components/main/Table/'
import { connect } from 'react-redux'

import getDetailInfo from '../../redux/actionCreatos/table'
import getUpdatedInfo from '../../redux/actionCreatos/table'

class Details extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      items: [],
      site: ''
    }
  }

  async componentDidMount() {
    const url = this.props.url
    this.props.getDetailInfo(url)
  }

  async componentWillReceiveProps(newProps) {
    let id = newProps.url
    if (id !== this.props.url) {
      this.props.getUpdatedInfo(id)
    }
  }

  render() {
    const { items } = this.props;
    return (
      <div className='cbp-spmenu-push' id='contDetail'>
        <LeagueTable state={items} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: state.table.info
})

const mapDispatchToProps = {
  getDetailInfo,
  getUpdatedInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);