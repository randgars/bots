import React from 'react';
import './childscriptslist.css';
import {
  RaisedButton,
  FlatButton,
  List,
  ListItem
} from 'material-ui';
import Dehaze from 'material-ui/svg-icons/image/dehaze';

class ChildScriptsList extends React.Component {
  constructor(props) {
    super(props);
    this.setScriptsList = this.setScriptsList.bind(this);
    this.state = {
      scriptsArray: [],
      scriptsList: []
    }
  }
  setScriptsList() {
    for (let i = 0; i < this.props.childScriptsList.length; i++) {
      if (this.props.currentScriptId == this.props.childScriptsList[i].parentId) {
        this.state.scriptsArray = this.props.childScriptsList[i].scripts.slice(0);
      }
    }
    this.state.scriptsList = this.state.scriptsArray.map((item, index) => {
      return (
        <ListItem
          primaryText={item}
          key={index}
        />
      )
    })
  }
  componentWillUpdate() {
    this.setScriptsList();
  }
  render() {
    return (
      <List>
        <ListItem
          primaryText="CHILDS LIST"
          primaryTogglesNestedList={true}
          nestedItems={this.state.scriptsList}
          className="child-scripts-list__list-item"
          rightToggle={<Dehaze/>}
        />
      </List>
    );
  }
}

ChildScriptsList.displayName = 'ChildScriptsList';
ChildScriptsList.propTypes = {};
ChildScriptsList.defaultProps = {};

export default ChildScriptsList;
