import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {} from '../actions/';
import { ROUTING } from '../actions/const';

export default function requireAuthentication(Component) {
  class AuthenticatedComponent extends React.Component {
    componentWillMount() {
      
      this.checkAuth(this.props.logged)
    }
    componentWillReceiveProps(nextProps) {
      
      this.checkAuth(nextProps.logged)
    }
    checkAuth(logged) {
      
      if (!logged) {
        this.props.dispatch({
          type: ROUTING,
          payload: {
            method: 'replace',
            nextUrl: '/login'
          }
        })
      }
    }
    render() {
      return (
        <div>
          {this.props.logged
            ? <Component {...this.props} />
            : null
          }
        </div>
      )
    }
  }

  AuthenticatedComponent.propTypes = {
    actions: PropTypes.shape({})
  };

  function mapStateToProps(state) {
    const props = {
      logged: window.localStorage.getItem('logged')
    };
    return props;
  }

  function mapDispatchToProps(dispatch) {
    const actions = {};
    const actionMap = { actions: bindActionCreators(actions, dispatch), dispatch };
    return actionMap;
  }

  return connect(mapStateToProps, mapDispatchToProps)(AuthenticatedComponent)
}
