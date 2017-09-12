import React from 'react';
import './campaigninfo.css';
import {
  RaisedButton,
  FlatButton,
  List,
  ListItem,
  IconButton,
  Subheader,
  Checkbox
} from 'material-ui';
import Add from 'material-ui/svg-icons/content/add';
import Clear from 'material-ui/svg-icons/content/clear';
import {cyan500} from 'material-ui/styles/colors';
import Dialog from 'material-ui/Dialog';

class CampaignInfo extends React.Component {
  constructor(props) {
    super(props);
    this.removeBot = this.removeBot.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.choosenBotsToAdd = this.choosenBotsToAdd.bind(this);
    this.addBots = this.addBots.bind(this);
    this.state = {
      dialogOpen: false,
      chosenBots: []
    }
  }
  handleOpen() {
    this.setState({...this.state, dialogOpen: true});
  }

  handleClose() {
    this.setState({
      ...this.state,
      dialogOpen: false,
      chosenBots: []
    });
  }
  choosenBotsToAdd(check) {
    
    let id = +check.target.id;
    for (let i = 0; i < this.state.chosenBots.length; i++) {
      if (this.state.chosenBots[i] == id) {
        this.state.chosenBots.splice(i, 1);
        return false
      }
    }
    this.state.chosenBots.push(id);
    
  }
  addBots() {
    
    this.props.actions.addBotsToCampaign(this.state.chosenBots, this.props.campaignInfo.item.id);
    this.handleClose();
  }
  removeBot(event) {
    
    this.props.actions.removeBotFromCampaign(event.botId, this.props.campaignInfo.item.id);
  }
  render() {
    
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <RaisedButton
        label="Submit"
        primary={true}
        onTouchTap={this.addBots}
      />
    ];
    const {item, botsToAdd} = this.props.campaignInfo;
    return (
      <div className="campaign-info-component">
        <div className="campaign-info-component__bot-list-block">
          <h3 className="campaign-info-component__campaign-name">
            {item.name}
          </h3>
          <List>
            <Subheader className="campaign-info-component__list-title">Campaign bots</Subheader>
            {
              item.bots.map((botItem, index) => {
                return (
                  <ListItem
                    key={index}
                    primaryText={botItem.name}
                    rightIconButton={<IconButton onTouchTap={this.removeBot.bind(this, {
                      botId: botItem.id
                    })}><Clear color={cyan500}/></IconButton>}
                  />
                );
              })
            }
          </List>
          <RaisedButton
            labelPosition="after"
            label="Add new bot"
            fullWidth={true}
            icon={<Add/>}
            primary={true}
            className="campaign-info-component__add-new-bot-btn"
            onTouchTap={this.handleOpen}
          />
        </div>
        <div className="campaign-info-component__info-block">
          <p>Site: {item.site}</p>
          <p>About: {item.overview}</p>
        </div>
        {
          this.state.dialogOpen &&
          <Dialog
            title="Dialog With Actions"
            actions={actions}
            modal={false}
            open={this.state.dialogOpen}
            onRequestClose={this.handleClose}
          >
            <List>
              {
                botsToAdd.map((item, index) => {
                  return (
                    <ListItem
                      primaryText={item.name}
                      leftCheckbox={<Checkbox onCheck={this.choosenBotsToAdd} id={item.id}/>}
                      key={index}
                    />
                  )
                })
              }
            </List>
          </Dialog>
        }
      </div>
    );
  }
}

CampaignInfo.displayName = 'CampaignInfo';
CampaignInfo.propTypes = {};
CampaignInfo.defaultProps = {};

export default CampaignInfo;
