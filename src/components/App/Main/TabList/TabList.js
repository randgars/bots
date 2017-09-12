import React from 'react';
import './tablist.css';
import {List, ListItem, FlatButton, RaisedButton, Dialog} from 'material-ui';
import { Link } from 'react-router';

const styles = {
  listItem: {
    fontSize: '1.2em'
  },
  list: {
    marginTop: 20
  },
  titleStyleDialog: {
    borderBottom: 'solid 1px #F0F0F0',
    padding: '10px 24px'
  },
  actionsStyleDialog: {
    borderTop: 'solid 1px #F0F0F0',
    padding: '10px 24px'
  },
  rightMarginBtn: {
    marginRight: 5
  }
};



class TabList extends React.Component {
  constructor(props) {
    super(props);
    this.dialogOpen = this.dialogOpen.bind(this);
    this.dialogClose = this.dialogClose.bind(this);
    this.saveAsDraftFn = this.saveAsDraftFn.bind(this);
    this.editDraftFn = this.editDraftFn.bind(this);
    this.restoreDraftFn = this.restoreDraftFn.bind(this);

    this.state = {
      open: false,
      currentId: null
    }

    this.enumStatus = {
      APPROVED: {
        statusColor: 'approved',
        stage: 'APPROVED',
        linkTo: true,
        fnOpen: null,
        dialogActions: null,
        dialogTitle: null,
        fnClose: null
      },
      REJECTED: {
        statusColor: 'rejected',
        stage: 'REJECTED',
        linkTo: false,
        fnOpen: this.dialogOpen,
        dialogActions: [
          <FlatButton
            label="OK"
            primary={true}
            onTouchTap={this.dialogClose}
            style={styles.rightMarginBtn}
          />,
          <RaisedButton
            label="Save as draft"
            primary={true}
            onTouchTap={this.saveAsDraftFn}
          />
        ],
        dialogTitle: this.props.checked[0].toUpperCase() + this.props.checked.slice(1) + ' status',
        fnClose: this.dialogClose,
        dialogContentTitle: [
          'Your ' + this.props.checked + ' was rejected!'
        ]
      },
      PENDING_APPROVAL: {
        statusColor: 'pending-approval',
        stage: 'PENDING_APPROVAL',
        linkTo: false,
        fnOpen: this.dialogOpen,
        dialogActions: <RaisedButton label="Got it!" primary={true} onTouchTap={this.dialogClose} />,
        dialogTitle: 'Info',
        fnClose: this.dialogClose,
        dialogContentTitle: [
          'Your ' + this.props.checked + ' is pending approval from moderator.',
          'Please, be patient. We are doing our best.'
        ]
      },
      PENDING_USER_APPROVAL: {
        statusColor: 'pending-user-approval',
        stage: 'PENDING_USER_APPROVAL',
        linkTo: true,
        fnOpen: null,
        dialogActions: null,
        dialogTitle: null,
        fnClose: null
      },
      DRAFT: {
        statusColor: 'drafts',
        stage: 'DRAFTS',
        linkTo: false,
        fnOpen: this.dialogOpen,
        dialogActions: [
          <FlatButton
            label="Edit"
            primary={true}
            onTouchTap={this.editDraftFn}
            style={styles.rightMarginBtn}
          />,
          <RaisedButton
            label="Restore"
            primary={true}
            onTouchTap={this.restoreDraftFn}
          />
        ],
        dialogTitle: 'Draft',
        fnClose: this.dialogClose,
        dialogContentTitle: [
          'You can restore your ' + this.props.checked,
          'Click "Restore" to submit your ' + this.props.checked + ' for review',
          'If you want to edit information before submitting click "Edit"'
        ]
      }
    }
  }
  
  saveAsDraftFn() {
    this.props.actions.saveAsDraft(this.state.currentId, this.props.checked);
    this.dialogClose();
  }
  editDraftFn() {
    
  }
  restoreDraftFn() {
    this.props.actions.restore(this.state.currentId, this.props.checked);
    this.dialogClose();
  }
  dialogOpen(dialogStates) {
    this.setState({...this.state, open: true, ...dialogStates});
  }
  dialogClose() {
    this.setState({...this.state, open: false});
  }

  render() {
    debugger
    return (
      <List style={styles.list}>
        {
          Array.isArray(this.props.list) && this.props.list.map(function(item, index){
            const { statusColor, stage, linkTo, fnOpen, dialogActions, dialogTitle, fnClose, dialogContentTitle } = this.enumStatus[item.status.toLocaleUpperCase()];
            return (
              <ListItem
                key={index}
                rightIconButton={
                  <div className="right-list-status">
                   <p className={`status status__${statusColor}`}>{stage}</p>
                  </div>
                }
                primaryText={item.name}
                style={styles.listItem}
              >
                {
                  <div>
                    {
                      linkTo &&
                      stage == "APPROVED" ? 
                      <Link className="link" to={`/${this.props.checked}/info/${item.id}`}/>
                      : <Link className="link" to={'/somepage'}/>
                    }
                    {
                      fnOpen && 
                      <FlatButton label="_" className={"dialog-btn"} onTouchTap={ fnOpen && fnOpen.bind(this, {
                        dialogActions: dialogActions,
                        onRequestClose: fnClose,
                        dialogTitle: dialogTitle,
                        actionsContainerStyle: styles.actionsStyleDialog,
                        dialogContentTitle: dialogContentTitle,
                        rejectedReason: item.shadow,
                        currentId: item.id
                      })} />
                    }                    
                  </div>
                }
              </ListItem>
            )
          }.bind(this))
        }
        {this.state.open && 
          <Dialog
            actions={this.state.dialogActions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.state.onRequestClose}
            title={this.state.dialogTitle}
            titleStyle={styles.titleStyleDialog}
            actionsContainerStyle={this.state.actionsContainerStyle}
          >
            { 
              this.state.dialogContentTitle.map((item, index) => {
                return (
                  <p key={index} className="dialog-content-title">{item}</p>
                )
              })
            }
            {
              this.state.rejectedReason &&
              <div>
                <p className="dialog-content-title dialog-content-title_font-bold">Reason</p>
                <p className="dialog-content-title">{this.state.rejectedReason.notes}</p>
              </div>
            }
          </Dialog>
        }
      </List>
    );
  }
  
}

TabList.displayName = 'TabList';
TabList.propTypes = {};
TabList.defaultProps = {};

export default TabList;
