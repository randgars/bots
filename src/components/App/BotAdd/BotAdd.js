import React from 'react';
import './botadd.css';
import {
  Field,
  FieldArray,
  reduxForm
} from 'redux-form';
import {
  RaisedButton,
  Dialog,
  Divider,
  List,
  ListItem,
  DropDownMenu,
  MenuItem,
  FlatButton,
  Checkbox
} from 'material-ui';
import Add from 'material-ui/svg-icons/content/add';
import FileDownload from 'material-ui/svg-icons/file/file-download';
import customTextField from 'material-redux-form/customTextField';
import customSelectedField from 'material-redux-form/customSelectedField';
import renderScripts from 'material-redux-form/renderScripts';
import validate from 'material-redux-form/validate';
import ChildScriptsList from './ChildScriptsList/ChildScriptsList';

const styles = {
  hintStyle: {
    color: '#6E6E6E'
  }
};

class BotAdd extends React.Component {
  constructor(props) {
    super(props);
    this.saveBot = this.saveBot.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.choosenChildsOfScript = this.choosenChildsOfScript.bind(this);
    this.submitChangesOfScript = this.submitChangesOfScript.bind(this);
    this.isGoal = this.isGoal.bind(this);

    this.state = {
      open: false,
      childScripts: [],
      allChosenScripts: [],
      templateName: 'none'
    };
  }

  saveBot(event){
    const greetingScript = {
      id: 0,
      nextBotQuestion: event.greetingNextQuestion,
      "type": "GREETING"
    }
    if (!event.scripts) {
      window.alert("No scripts added!")
      return false
    }
    const scriptsArray = event.scripts.slice(0);
    scriptsArray.unshift(greetingScript);
    for (let i = 0; i < scriptsArray.length; i++) {
      for (let j = 0; j < this.state.childScripts.length; j++) {
        if (scriptsArray[i].id == this.state.childScripts[j].parentId) {
          scriptsArray[i].childScriptIds = this.state.childScripts[j].scripts
        }
      }
    }
    const data = {
      name: event.name,
      country: event.country.toUpperCase(),
      scripts: scriptsArray
    }
    this.props.actions.saveBot(data);
  }

  handleOpen(dialogStates) {
    if (!this.props.scriptsList.values || !this.props.scriptsList.values.scripts || this.props.scriptsList.values.scripts.length == 0) {
      window.alert('No scripts added!');
      return false
    }
    this.setState({
      ...this.state,
      open: true,
      filterScriptsList: this.props.scriptsList.values.scripts.filter(script => script.id != dialogStates.currentIdScript),
      ...dialogStates
    });   
  }
  handleClose() {
    this.setState({
      ...this.state,
      open: false,
      allChosenScripts: []
    });
  }
  choosenChildsOfScript(check) {
    let id = +check.target.id;
    for (let i = 0; i < this.state.allChosenScripts.length; i++) {
      if (this.state.allChosenScripts[i] == id) {
        this.state.allChosenScripts.splice(i, 1);
        return false
      }
    }
    this.state.allChosenScripts.push(id);
  }
  isGoal(event, key, value) {
    this.setState({
      ...this.state,
      templateName: value
    })
  }
  submitChangesOfScript() {
    for (let i = 0; i < this.state.childScripts.length; i++) {
      if (this.state.childScripts[i].parentId == this.state.currentIdScript) {
        this.state.childScripts.splice(i, 1, {
          scripts: this.state.allChosenScripts.slice(0),
          parentId: this.state.currentIdScript
        })
        this.state.allChosenScripts = [];
        this.handleClose();
        return false;
      }
    }
    this.state.childScripts.push({
      scripts: this.state.allChosenScripts.slice(0),
      parentId: this.state.currentIdScript
    });
    this.handleClose();
  }
  render() {
    const { handleSubmit, pristine, reset, submitting, botAddData } = this.props;
    const actions = [
      <RaisedButton
        label="Submit"
        primary={true}
        onTouchTap={this.submitChangesOfScript}
      />,
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
    ];
    const newProps = {
      handleOpen: this.handleOpen,
      childScriptsList: this.state.childScripts,
    }
    return (
      <div className="botadd-component">
        <h2 className="botadd-component__title">Add bot</h2>
        <RaisedButton
          label="Choose file"
          containerElement="label"
          className="botadd-component__button"
        >
          <input type="file" className="botadd-component__button_file-input" />
        </RaisedButton>
        <RaisedButton
          label="submit"
          primary={true}
          className="botadd-component__button"
        />

        <form onSubmit={handleSubmit(props => this.saveBot(props))}>
          <Field
            name="name"
            type="text"
            component={customTextField}
            label="Bot name"
            fullWidth={true}
          />
          <Field
            name="country"
            component={customSelectedField}
            label="Country"
            hintStyle={styles.hintStyle}
            menuItemStyle={styles.hintStyle}
            fullWidth={true}
          >
            {
              botAddData && Array.isArray(botAddData.countries) && botAddData.countries.map((item, index) => {
                return (
                  <MenuItem key={index} value={item.toLowerCase()} primaryText={item[0] + item.slice(1).toLowerCase()} />
                )
              })
            }
          </Field>

          <div className="botadd-component__script-block">
            <div className="botadd-component__script-buttons">
              <p className="botadd-component__script-title">GREETING</p>
              <RaisedButton
                label="Add child script"
                onTouchTap={this.handleOpen.bind(this, {
                  currentIdScript: 0
                })}
                labelPosition="after"
                icon={<Add />}
              />
            </div>
            <Field
              name="greetingNextQuestion"
              type="text"
              component={customTextField}
              label="Next question"
              fullWidth={true}
            />
            <ChildScriptsList childScriptsList={this.state.childScripts} currentScriptId={this.state.currentIdScript}/>
          </div>

          <FieldArray name="scripts" props={newProps} component={renderScripts}/>
          
          <div className="botadd-component__save-btn-block">
            <RaisedButton
              label="Save"
              primary={true}
              labelPosition="after"
              icon={<FileDownload />}
              className="botadd-component__button"    
            >
              <input className="input-hidden" type="submit" disabled={submitting}/>
            </RaisedButton>
          </div>
          
        </form>
        {
          this.state.open &&
          <Dialog
            title="Choose childs scripts"
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
          >
            <Divider />
            <div className="add-script-dialog__list">
              <List>
                {
                  Array.isArray(this.state.filterScriptsList) && this.state.filterScriptsList.map((item, index) => {
                    return (
                      <ListItem
                        primaryText={"User answer: " + item.userAnswer + "; Next question: " + item.nextQuestion}
                        leftCheckbox={<Checkbox onCheck={this.choosenChildsOfScript} id={item.id}/>}
                        key={index}
                      />
                    )
                  })
                }
              </List>
            </div>
            {
              this.state.currentIdScript != 0 &&
              <div className="add-script-dialog__form-template">
                <p className="add-script-dialog__title-template">Choose form template</p>
                <DropDownMenu className="add-script-dialog__dropdown-list" value={this.state.templateName} onChange={this.isGoal}>
                  <MenuItem value="none" primaryText="none" />
                  {
                    botAddData && Array.isArray(botAddData.goals) && botAddData.goals.map((item, index) => {
                      return (
                        <MenuItem key={index} value={item.templateName} primaryText={item.templateName[0].toUpperCase() + item.templateName.slice(1)} />
                      )
                    })
                  }
                </DropDownMenu>
              </div>
            }
            
          </Dialog>
        }        
      </div>
    );
  }
}

BotAdd.displayName = 'BotAdd';
BotAdd.propTypes = {};
BotAdd.defaultProps = {};


export default reduxForm({
  form: 'botAdd',
  validate
})(BotAdd)