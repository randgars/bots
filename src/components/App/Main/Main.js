import React from 'react';
import './main.css';
import {Tabs, Tab, RaisedButton} from 'material-ui';
import TabHeader from './TabHeader/TabHeader';
import TabList from './TabList/TabList';
import SubscriptionsOffers from './SubscriptionsOffers/SubscriptionsOffers';

import axios from 'axios';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 10,
    marginBottom: 30,
    fontWeight: 400,
  },
  tab: {
    backgroundColor: '#fff'    
  },
  activeTab: {
    backgroundColor: '#00BCD4'
  },
  tabBtn: {
    color: '#00BCD4'
  }
};
class Main extends React.Component {
 
  constructor(props) {
    super(props);
    this.checkIp = this.checkIp.bind(this);
    this.checkIpSuccess = this.checkIpSuccess.bind(this);
    this.checkIpCatch = this.checkIpCatch.bind(this);
    this.state = {
      isBot: 'bot',
      isCampaign: 'campaign',
      userInfo: null
    }
  }
  checkIpSuccess(response) {
    window.console.log(response.data)
    this.setState({
      ...this.state,
      userInfo: response.data
    })
  }
  checkIpCatch(error) {
    window.console.log(error)
  }
  checkIp() {
    axios.get('//geoip.nekudo.com/api/<ip_address>').then(this.checkIpSuccess, this.checkIpCatch);
  }
  render() {
    return (
      <div className="main-component">
        <Tabs inkBarStyle={styles.activeTab} tabItemContainerStyle={styles.tab} initialSelectedIndex={2}>
          <Tab label="Home" buttonStyle={styles.tabBtn}>
            <div>
              <h2 style={styles.headline}>Home</h2>
              <p>
                Welcome, user@gmail.com!
              </p>
              <p>
                Contact administrators if you have any questions
              </p>
              <RaisedButton
                label="Show user info"
                primary={true}
                onTouchTap={this.checkIp}
              />
              {
                this.state.userInfo &&
                <div>
                  <p>IP: {this.state.userInfo.ip}</p>
                  <p>Country name: {this.state.userInfo.country.name}</p>
                  <p>Country code: {this.state.userInfo.country.code}</p>
                  <p>City: {this.state.userInfo.city}</p>
                </div>
              }
            </div>
          </Tab>
          <Tab label="Campaigns"  buttonStyle={styles.tabBtn}>
            <div>
              <TabHeader checked={this.state.isCampaign} tabHeader={this.props.tabHeaderCampaign} actions={this.props.actions}/>
              <TabList actions={this.props.actions} checked={this.state.isCampaign} list={this.props.campaignList}/>
            </div>
          </Tab>
          <Tab label="Bots"  buttonStyle={styles.tabBtn}>
            <div>
              <TabHeader checked={this.state.isBot} tabHeader={this.props.tabHeaderBot} actions={this.props.actions}/>
              <TabList actions={this.props.actions} checked={this.state.isBot} list={this.props.botList}/>
            </div>
          </Tab>
          <Tab label="Subscriptions"  buttonStyle={styles.tabBtn}>
            <div>
              <h2 style={styles.headline}>Subscriptions</h2>
              <p>No active subscriptions found. Select a plan and subscribe today!</p>
              <SubscriptionsOffers offerInfo={this.props.offerInfo}/>
            </div>
          </Tab>
          <Tab label="Test bot"  buttonStyle={styles.tabBtn}>
            <div>
              <h2 style={styles.headline}>Test bot</h2>
              <iframe src="http://localhost:8000/chat/26"
                sandbox="allow-forms allow-scripts allow-same-origin allow-top-navigation allow-modals" frameBorder="0"
                height="520" width="400">
                Your browser doesn't support frames!
              </iframe>
            </div>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

Main.displayName = 'Main';
Main.propTypes = {};
Main.defaultProps = {};

export default Main;
