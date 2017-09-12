import React from 'react';
import './usermessage.css';
import QueryBuilder from 'material-ui/svg-icons/action/query-builder';

const styles = {
  clockIco: {
    color: '#858585',
    width: '12px',
    height: '12px',
    marginRight: '2px'
  }
}

class UserMessage extends React.Component {

  render() {
    const {item} = this.props;
    return (
      <div className="user-message-component">
        <div className="user-message-component__info">
          <p className="user-message-component__info__name">{item.name}</p>
          <p className="user-message-component__info_time"><QueryBuilder style={styles.clockIco}/>{item.time}</p>
        </div>
        <div className="user-message-component__wrap">
          <p className="user-message-component__wrap__message">{item.message}</p>
        </div>
      </div>
    );
  }
}

UserMessage.displayName = 'UserMessage';
UserMessage.propTypes = {};
UserMessage.defaultProps = {};

export default UserMessage;
