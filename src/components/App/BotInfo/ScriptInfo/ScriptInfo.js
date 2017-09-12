import React from 'react';
import './scriptinfo.css';
import {ListItem} from 'material-ui';
import Scroll from 'react-scroll';

const Link = Scroll.Link;
// const Element = Scroll.Element;
// const Events = Scroll.Events;
// const scroll = Scroll.animateScroll;
// const scrollSpy = Scroll.scrollSpy;

class ScriptInfo extends React.Component {
  constructor(props) {
    super(props);
    this.setChildScriptsList = this.setChildScriptsList.bind(this);
    this.test = this.test.bind(this);
    this.state = {
      childScripts: []
    }
  }
  test(event) {
    
    const itemId = +event.target.id;
    this.props.refValues[itemId]
    
    
  }
  setChildScriptsList() {
    this.state.childScripts = this.props.item.childScripts.map((item, index) => {
      return (
        <ListItem
          key={index}
          primaryText={item.userAnswer}
          secondaryText={item.nextBotQuestion}
        >
         <Link
            to={`script-${item.id}`}
            isDynamic={true}
            spy={false}
            smooth={true}
            offset={0}
            duration={500}
            onSetActive={this.handleSetActive}
            className="link-hidden"
            onClick={this.test}
            id={item.id}
          /> 
        </ListItem>
      )
    })
  }
  componentWillMount() {
    this.setChildScriptsList();
  }
  
  render() {
    const {userAnswer, nextBotQuestion, goal, id, type} = this.props.item
    return (
      <ListItem
        className="bot-info-component__list-script-item"
        primaryTogglesNestedList={true}
        nestedItems={this.state.childScripts}
      >
        {
          type == 'GREETING' ? <p className="bot-info-component__greeting-title">GREETING</p> :
          <p className="bot-info-component__script-answer-question">User answer: <span>{userAnswer}</span></p>
        }        
        {
          !goal ?
          <p className="bot-info-component__script-answer-question">Next bot question: <span>{nextBotQuestion}</span></p> :
          <p className="bot-info-component__script-answer-question">Template: <span>{goal.templateName}</span></p>
        }
      </ListItem>
    );
  }
}

ScriptInfo.displayName = 'ScriptInfo';
ScriptInfo.propTypes = {};
ScriptInfo.defaultProps = {};

export default ScriptInfo;
