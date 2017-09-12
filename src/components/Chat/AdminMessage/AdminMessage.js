import React from 'react';
import './adminmessage.css';
import QueryBuilder from 'material-ui/svg-icons/action/query-builder';
import { Dialog } from 'material-ui';
import EmailForm from './EmailForm/EmailForm';
import PhoneForm from './PhoneForm/PhoneForm';
import axios from 'axios';

const styles = {
  clockIco: {
    color: '#858585',
    width: '12px',
    height: '12px',
    marginRight: '2px'
  },
  titleDialog: {
    fontSize: '0.9em',
    textAlign: 'center',
    lineHeight: '1.2em',
    padding: '20px 20px 10px 20px'
  }
}

class AdminMessage extends React.Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.postForm = this.postForm.bind(this);
    this.postFormSuccess = this.postFormSuccess.bind(this);
    this.postFormFail = this.postFormFail.bind(this);

    this.state = {
      open: false,
      isAdmin: 'Admin',
      postUrl: null,
      postData: null
    }

    this.enumTemplate = {
      phone: {
        dialogTitle: 'Please leave your phone number and our manager will contact you',
        textFields: <PhoneForm onSubmit={this.postForm} />
      },
      email: {
        dialogTitle: 'Please leave your email and our manager will contact you',
        textFields: <EmailForm onSubmit={this.postForm} />
      }
    }
  }
  handleOpen() {
    this.setState({...this.state, open: true});
  }
  handleClose() {
    this.setState({...this.state, open: false});
  }
  postFormSuccess(response) {
    console.log(response);
    this.props.actions.allMessages(response.data.message, this.state.isAdmin);
  }
  postFormFail(error) {
    console.log(error);
  }
  postForm(event) {
    
    if (event.email) {
      this.state.postUrl = 'https://es-bot-api.herokuapp.com/chat/email';
      this.state.postData = {
        "botId": this.props.botId,
        "email": event.email,
        "name": event.name,
        "notes": event.notes
      };
    } else {
      this.state.postUrl = 'https://es-bot-api.herokuapp.com/chat/phone';
      let startTime = event.startHours + ':' + event.startMinutes;
      let endTime = event.endHours + ':' + event.endMinutes;
      this.state.postData = {
        "botId": this.props.botId,
        "endTime": endTime,
        "name": event.name,
        "notes": event.notes,
        "phone": {
          "country": event.country.toUpperCase(),
          "number": event.phone
        },
        "startTime": startTime
      };
    }
    axios.post(this.state.postUrl, this.state.postData)
      .then(this.postFormSuccess)
      .catch(this.postFormFail);
  
    this.handleClose();
  }

  componentDidMount() {
    if (this.props.item.isTemplate) {
      this.handleOpen();
    }
  }
  
  render() {
    const {item} = this.props;
    
    return (
      <div>
        {
          !item.isTemplate && 
          <div className="admin-message-component">
            <div className="admin-message-component__info">
              <p className="admin-message-component__info__name">{item.name}</p>
              <p className="admin-message-component__info_time"><QueryBuilder style={styles.clockIco}/>{item.time}</p>
            </div>
            <div className="admin-message-component__wrap">
              <p className="admin-message-component__wrap__message">{item.message}</p>
            </div>
          </div>
          
        }
        {
          item.isTemplate && 
          <Dialog
            title={this.enumTemplate[item.isTemplate].dialogTitle}
            modal={true}
            open={this.state.open}
            onRequestClose={this.handleClose}
            titleStyle={styles.titleDialog}
            className="admin-message-component__dialog"
          >
            {this.enumTemplate[item.isTemplate].textFields}
          </Dialog>
        }
      </div>
    );
  }
}

AdminMessage.displayName = 'AdminMessage';
AdminMessage.propTypes = {};
AdminMessage.defaultProps = {};

export default AdminMessage;
