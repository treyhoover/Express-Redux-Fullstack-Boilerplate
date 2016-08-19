import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import config from '../../../config';

import './app.css';

class AppContainer extends Component {
  componentDidMount() {
    console.info(config);
  }
  
  render() {
    return (
      <h1>Hello world!</h1>
    );
  }
}

AppContainer.propTypes = {};

function mapStateToProps(state, routing) {
  return {};
}

export default connect(mapStateToProps)(AppContainer);
