import React from 'react';
import './botinfo.css';
import {
  RaisedButton,
  List
} from 'material-ui';
import ScriptInfo from './ScriptInfo/ScriptInfo';
import Scroll from 'react-scroll';

const Element = Scroll.Element;

class BotInfo extends React.Component {
  constructor(props){
    super(props);
    this.publishBotFn = this.publishBotFn.bind(this);
    this.openDialog = this.openDialog.bind(this);
    this.state = {
      childScriptsArray: [],
      childScriptsObject: [],
      displayPublishBtn: true
    }
  }
  publishBotFn() {
    this.props.actions.publishBot(this.props.botInfo.id);
    debugger
  }
  openDialog () {

  }

  render() {
    
    return (
      <div className="bot-info-component">
        {
          this.props.botInfo &&
          <div className="bot-info-component__wrap">
            <div className="bot-info-component__header">
              <div className="bot-info-component__main-info">
                <h2 className="bot-info-component__name-info">{this.props.botInfo.name}</h2>
                <p className="bot-info-component__country-info">{this.props.botInfo.country}</p>
              </div>
              {
                this.state.displayPublishBtn ?
                <RaisedButton
                  label="Publish bot"
                  primary={true}
                  onTouchTap={this.publishBotFn}
                /> :
                <RaisedButton
                  label="Generate script"
                  primary={true}
                  onTouchTap={this.openDialog}
                />
              }
              
            </div>
            <div className="bot-info-component__campaigns">
              <p className="bot-info-component__campaigns-title">Bot's campaigns:</p>
              <ul className="bot-info-component__campaigns-list">
                {
                  Array.isArray(this.props.botInfo.campaigns) && this.props.botInfo.campaigns.map((item, index) => (
                    <li key={index} className="">
                      {item.name}
                    </li>
                  ))
                }
              </ul>
            </div>
            <div className="bot-info-component__scripts">
              <p className="bot-info-component__scripts-title">Scripts:</p>
            </div>
            
            <List>
            {
              Array.isArray(this.props.botInfo.scripts) && this.props.botInfo.scripts.map((item, index) => (
                <Element key={index} name={`script-${item.id}`}><ScriptInfo key={index} item={item} /></Element>
              ))
            }
            </List>
            
            
          </div>
        }
      </div>
    );
  }
}

BotInfo.displayName = 'BotInfo';
BotInfo.propTypes = {};
BotInfo.defaultProps = {};

export default BotInfo;
