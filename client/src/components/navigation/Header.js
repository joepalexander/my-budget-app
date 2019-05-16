//NPM
import jwt from 'jsonwebtoken';

//React
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Header extends Component {

  logout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    this.props.history.push("/login");
  }

  render(){

    let tokenData = jwt.decode(localStorage.getItem('accessToken'))

    return(
      <div>
        <div>
          {`Welcome ${tokenData.firstName}`}
        </div>
        <button 
            onClick={this.logout}>
            Logout
        </button> 
      </div>
    )
  }
}

export default withRouter (Header);