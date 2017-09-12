import React from 'react';
import './chat.css';
import { RaisedButton, TextField, AppBar, IconButton  } from 'material-ui';
import ViewHeadline from 'material-ui/svg-icons/action/view-headline';
import ChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import {grey50} from 'material-ui/styles/colors';
import UserMessage from './UserMessage/UserMessage';
import AdminMessage from './AdminMessage/AdminMessage';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

const styles = {
  header: {
    height: '50px',
  },
  headerIconLeft: {
    color: '#fff',
    marginTop: 12,
  },
  headerIconRight: {
    marginTop: 0,
    marginBottom: 0
  },
  headerTitle: {
    fontSize: '1.2em',
    lineHeight: '50px',
    height: '50px'
  },
  sendMsgBtn: {
    marginLeft: '10px'
  }
}

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.scrollToBottom = this.scrollToBottom.bind(this);
    this.connect = this.connect.bind(this);
    this.sendQuestion = this.sendQuestion.bind(this);
    this.inputValue = this.inputValue.bind(this);
    this.hiddenChat = this.hiddenChat.bind(this);
    this.state = {
      currentScriptId: null,
      botId: +this.props.location.pathname.slice(6),
      stompClient: null,
      isUser: 'User',
      isAdmin: 'Admin',
      displayChat: true
    }
  }
  scrollToBottom(){
    const block = document.getElementsByClassName('chat-component__messages-area');
    block[0].scrollTop = block[0].scrollHeight;
  }
  componentDidMount(){
    this.scrollToBottom();
    this.connect();
  }
  componentDidUpdate(){
    this.scrollToBottom();
  }
  connect() {
    const socket = new SockJS('//172.23.1.170:8080/chat');
    const _this = this;
    _this.state.stompClient = Stomp.over(socket);
    _this.state.stompClient.connect({}, function (frame) {
      window.console.log('Connected: ' + frame);
      _this.state.stompClient.subscribe('/user/bot/greeting', function (greeting) {
        _this.state.currentScriptId = JSON.parse(greeting.body).currentScriptId;
        _this.props.actions.allMessages(JSON.parse(greeting.body).message, _this.state.isAdmin);
      });

      _this.state.stompClient.subscribe('/user/bot/question', function (message) {
        _this.state.currentScriptId = JSON.parse(message.body).currentScriptId;
        _this.props.actions.allMessages(JSON.parse(message.body).question, _this.state.isAdmin, JSON.parse(message.body).templateName);
      });

      _this.state.stompClient.send('/app/connect', {}, JSON.stringify({'botId': _this.state.botId}));
    })
  }
  inputValue(event){
    this.state.inputValue = event.target.value;
    this.setState({
      ...this.state,
      inputValue: event.target.value
    })
  }
  sendQuestion(){
    const message = {
        'botId': this.state.botId,
        'currentScriptId': this.state.currentScriptId,
        'answer': this.state.inputValue
    };
    this.state.stompClient.send("/app/answer", {}, JSON.stringify(message));
    this.props.actions.allMessages(this.state.inputValue, this.state.isUser);
    this.setState({
      ...this.state,
      inputValue: ''
    })
  }
  hiddenChat() {
    this.setState({
      displayChat: !this.state.displayChat
    })
  }

  render() {
    return (
      <div className="chat-component">
        <AppBar
          title="Chat"
          iconElementLeft={<ChatBubble color={grey50} />}
          iconElementRight={<IconButton onTouchTap={this.hiddenChat}><ViewHeadline /></IconButton>}
          iconStyleLeft={styles.headerIconLeft}
          iconStyleRight={styles.headerIconRight}
          style={styles.header}
          titleStyle={styles.headerTitle}
        />
        <div className={`chat-component_display-chat_${this.state.displayChat}`}>
          <div className="chat-component__messages-area">
          {
            this.props.allMessages && this.props.allMessages.map((item, index) =>  {
              if (item.name == 'Admin') {
                return <AdminMessage actions={this.props.actions} item={item} key={index} botId={this.state.botId}/>
              } else {
                return <UserMessage item={item} key={index} />
              }
            })
          }
          </div>
          <div className="chat-component__input-panel">
            <TextField
              hintText="Type your message here"
              value={this.state.inputValue}
              fullWidth={true}
              onChange={this.inputValue}
            />
            <RaisedButton
              label="Send"
              primary={true}
              style={styles.sendMsgBtn}
              onTouchTap={this.sendQuestion}
            />
          </div>
        </div>
        
      </div>
    );
  }
}

Chat.displayName = 'Chat';
Chat.propTypes = {};
Chat.defaultProps = {};

export default Chat;
