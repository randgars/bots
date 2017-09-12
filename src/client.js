import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import App from './containers/App';
import configureStore from './stores';
import HomePage from './containers/HomePage';
import MainPage from './containers/MainPage';
import Login from './containers/Login';
import Registration from './containers/Registration';
import BotAdd from './containers/BotAdd';
import CampaignAdd from './containers/CampaignAdd';
import CampaignInfo from './containers/CampaignInfo';
import BotInfo from './containers/BotInfo';
import Chat from './containers/Chat';
import RegistrationVerify from './containers/RegistrationVerify';
import RegistrationUnverified from './containers/RegistrationUnverified';
import RegistrationActivate from './components/App/RegistrationActivate/RegistrationActivate';
import requireAuthentication from './containers/AuthenticatedComponent';


import { Router, Route, IndexRoute, IndexRedirect, hashHistory, browserHistory } from 'react-router';

const store = configureStore();

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={HomePage} />
          <Route path='main' component={requireAuthentication(MainPage)}/>
          <Route path='login' component={Login}/>
          <Route path='registration' component={Registration}/>
          <Route path='bot/add' component={requireAuthentication(BotAdd)}/>
          <Route path='campaign/add' component={requireAuthentication(CampaignAdd)}/>          
          <Route path='bot/info/:id' component={requireAuthentication(BotInfo)}/>
          <Route path='campaign/info/:id' component={requireAuthentication(CampaignInfo)}/>
          <Route path='activate' component={RegistrationActivate}/>
          <Route path='verify' component={RegistrationVerify}/>
          <Route path='unverified' component={RegistrationUnverified}/>
          <Route path='chat/:id' component={Chat}/>
        </Route>
      </Router>
    </Provider>
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const NextApp = require('./containers/App').default; // eslint-disable-line global-require
    const NextHomePage = require('./containers/HomePage').default;
    const NextLogin = require('./containers/Login').default;
    const NextRegistration = require('./containers/Registration').default;
    const NextMainPage = require('./containers/MainPage').default;
    const NextCampaignAdd = require('./containers/CampaignAdd').default;
    const NextBotAdd = require('./containers/BotAdd').default;
    const NextBotInfo = require('./containers/BotInfo').default;
    const NextCampaignInfo = require('./containers/CampaignInfo').default;
    const NextChat = require('./containers/Chat').default;
    const NextRegistrationVerify = require('./containers/RegistrationVerify').default;
    const NextRegistrationUnverified = require('./containers/RegistrationUnverified').default;
    const NextRegistrationActivate = require('./components/App/RegistrationActivate/RegistrationActivate').default;


    ReactDOM.render(
      <AppContainer>
        <Provider store={store}>
          <Router history={browserHistory}>
            <Route path='/' component={NextApp}>
              <IndexRoute component={NextHomePage} />
              <Route path='main' component={requireAuthentication(NextMainPage)}/>
              <Route path='login' component={NextLogin}/>
              <Route path='registration' component={NextRegistration}/>
              <Route path='bot/add' component={requireAuthentication(NextBotAdd)}/>
              <Route path='campaign/add' component={requireAuthentication(NextCampaignAdd)}/>          
              <Route path='bot/info/:id' component={requireAuthentication(NextBotInfo)}/>
              <Route path='campaign/info/:id' component={requireAuthentication(NextCampaignInfo)}/>
              <Route path='verify' component={NextRegistrationVerify}/>
              <Route path='unverified' component={NextRegistrationUnverified}/>
              <Route path='activate' component={NextRegistrationActivate}/>
              <Route path='chat/:id' component={NextChat}/>
            </Route>
          </Router>
        </Provider>
      </AppContainer>,
      document.getElementById('app')
    );
  });
}