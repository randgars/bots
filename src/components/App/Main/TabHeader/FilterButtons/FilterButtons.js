import React from 'react';
import './filterbuttons.css';
import {DropDownMenu, MenuItem} from 'material-ui';

class FilterButtons extends React.Component {
  constructor(props) {
    super(props);
    this.filterToStatus = this.filterToStatus.bind(this);
    this.state = {
      menuItemValue: 1
    }
  }
  filterToStatus(event, key, value) {
    this.setState({
      ...this.state,
      menuItemValue: value
    })
    switch(event.target.innerText.toUpperCase()) {
      case 'ALL':
        if (this.props.checked == 'bot') {
          this.props.actions.allBotfilter();
        } else {
          this.props.actions.allCampaignFilter();
        }
        break;
      case 'APPROVED':
        if (this.props.checked == 'bot') {
          this.props.actions.approvedfilter(event.target.innerText.toUpperCase());
        } else {
          this.props.actions.approvedCampaignFilter(event.target.innerText.toUpperCase());
        }
        break;
      case 'PENDING YOUR APPROVAL':
        if (this.props.checked == 'bot') {
          this.props.actions.pendingYourApprovalfilter(event.target.innerText.toUpperCase());
        } else {
          this.props.actions.pendingYourApprovalCampaignFilter(event.target.innerText.toUpperCase());
        }
        break;
      case 'REJECTED':
        if (this.props.checked == 'bot') {
          this.props.actions.rejectedfilter(event.target.innerText.toUpperCase());
        } else {
          this.props.actions.rejectedCampaignFilter(event.target.innerText.toUpperCase());
        }
        break;
      case 'PENDING ADMIN APPROVAL':
        if (this.props.checked == 'bot') {
          this.props.actions.pendingAdminApprovalfilter(event.target.innerText.toUpperCase());
        } else {
          this.props.actions.pendingAdminApprovalCampaignFilter(event.target.innerText.toUpperCase());
        }
        break;
      case 'DRAFTS':
        if (this.props.checked == 'bot') {
          this.props.actions.draftsfilter(event.target.innerText.toUpperCase());
        } else {
          this.props.actions.draftsCampaignFilter(event.target.innerText.toUpperCase());
        }
        break;
    };    
  }
  render() {
    return (
      <div className="filterbuttons-component">
        {
          <DropDownMenu maxHeight={300} value={this.state.menuItemValue} onChange={this.filterToStatus}>
            {
              Array.isArray(this.props.tabHeader.filterBtns) && this.props.tabHeader.filterBtns.map((item, index) => (
                <MenuItem value={index + 1} primaryText={item} key={index} />
              ))
            }
          </DropDownMenu>
        }
      </div>
    );
  }
}

FilterButtons.displayName = 'FilterButtons';
FilterButtons.propTypes = {};
FilterButtons.defaultProps = {};

export default FilterButtons;
