import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../../store/actions/user.js';
import { withRouter } from 'react-router-dom';

class Home extends Component {

  onHandleClick = () => {
    this.props.useractions.setUserName('test');
  }

  render = () => {
    return (
      <div>
        <h1>HELLO HOME {this.props.user.name}</h1>
        <button onClick={this.onHandleClick}></button>
      </div>
    );
  }
}

/* connecting to store   */
function mapStateToProps(state, ownProps) {
  return {
    user: state.user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    useractions: bindActionCreators(userActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
