import React from 'react';
import './tabheader.css';
import FilterButtons from './FilterButtons/FilterButtons';
import {RaisedButton, TextField} from 'material-ui';
import { Link } from 'react-router';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 10,
    marginBottom: 30,
    fontWeight: 400,
  },
  addBtn: {
    marginRight: 20
  }
};

class TabHeader extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleSearch(e, inputValue) {
    if (this.props.checked == 'bot') {
      this.props.actions.searchBots(inputValue);
    } else {
      this.props.actions.searchCampaigns(inputValue);
    }
  }
  render() {
    return (
      <div className="tab-header-component">
        {
          this.props.tabHeader &&
          <div>
            <h2 style={styles.headline}>{this.props.tabHeader.title}</h2>
            <div className="tab-header-component__header-panel">
              <div>
                <RaisedButton label={this.props.tabHeader.addBtnName} primary={true} style={styles.addBtn}>
                  <Link className="link" to={`/${this.props.checked}/add`}/>
                </RaisedButton>
                <TextField
                  type="text"
                  hintText={this.props.tabHeader.searchHint}
                  onChange={this.handleSearch}
                />
              </div>                
              <FilterButtons checked={this.props.checked} tabHeader={this.props.tabHeader} actions={this.props.actions}/>
            </div>
          </div>
        }
      </div>
    );
  }
}

TabHeader.displayName = 'TabHeader';
TabHeader.propTypes = {};
TabHeader.defaultProps = {};

export default TabHeader;
