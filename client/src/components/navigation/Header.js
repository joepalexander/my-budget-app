//NPM
import jwt from 'jsonwebtoken';
import { AppBar, Typography, Button, Toolbar} from '@material-ui/core'
import { styled } from '@material-ui/styles';


//React
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

//Styles

const Greeting = styled(Typography)({
  flexGrow: 1,
})

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
        <AppBar position="static">
          <Toolbar>
            <Greeting variant="h6">
              {`Welcome ${tokenData.firstName}`}
            </Greeting >
            <Button color="inherit"
                onClick={this.logout}>
                Logout
            </Button> 
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default withRouter (Header);