import React from 'react';
import 'babel-polyfill';
import './app.css';
import {blue600} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {AppBar, IconButton, MenuItem, IconMenu} from 'material-ui';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import injectTapEventPlugin from 'react-tap-event-plugin';
import SignUp from './SignUp/SignUp';
import Chat from '../Chat/Chat';
import { Link } from 'react-router';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: blue600,
  },
});
const styles = {
  appBarRight: {
    display: 'flex',
    alignItems: 'center',
    margin: 0
  }
}
class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
    this.state = {
      logged: window.localStorage.getItem('logged')
    }
  }
  logout() {
    this.props.actions.logout();
  }
  componentWillReceiveProps() {
    this.setState({
      logged: window.localStorage.getItem('logged')
    });
  }
  render() {
    if (this.props.location.pathname.includes('/chat')){
      return(
        <MuiThemeProvider muiTheme={muiTheme}>
          <Chat allMessages={this.props.allMessages} location={this.props.location} actions={this.props.actions}/>
        </MuiThemeProvider>
      )
    } else
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="index">
          <AppBar
            title={this.state.logged ? <Link className="top-app-bar-link" to="/main">ES Bot</Link> : <Link className="top-app-bar-link" to="/">ES Bot</Link>}
            iconElementRight={
              this.state.logged ?
              <IconMenu
                iconButtonElement={
                  <IconButton><MoreVertIcon /></IconButton>
                }
                targetOrigin={{horizontal: 'right', vertical: 'top'}}
                anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                onItemTouchTap={this.logout}
              >
                <MenuItem primaryText="Log out" />
              </IconMenu> :
              <SignUp />
            }
            showMenuIconButton={false}
            iconStyleRight={styles.appBarRight}
          />
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
  
}
injectTapEventPlugin();
AppComponent.defaultProps = {
};

export default AppComponent;
