import React from 'react';
import './home.css';
import { Link } from 'react-router';

class Home extends React.Component {

  render() {
    return (
      <div className="home-component">
        <h1>Welcome to our site</h1>
        <p>Please, log in or create an account to get an access to all features</p>
        <p>Don't have an account? <Link to="/registration">Sign up</Link></p>
      </div>
    );
  }
}

Home.displayName = 'Home';
Home.propTypes = {};
Home.defaultProps = {};

export default Home;
