import React from 'react';
import './navlink.css';
import { Link } from 'react-router';

class NavLink extends React.Component {

  render() {
    return <Link {...this.props} activeClassName='active'/>
  }
}

NavLink.displayName = 'NavLink';
NavLink.propTypes = {};
NavLink.defaultProps = {};

export default NavLink;
