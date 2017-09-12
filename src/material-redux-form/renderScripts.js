import React from 'react';
import { Field } from 'redux-form';
import customTextField from 'material-redux-form/customTextField';
import {
  RaisedButton,
  FlatButton
} from 'material-ui';
import Add from 'material-ui/svg-icons/content/add';
import BorderColor from 'material-ui/svg-icons/editor/border-color';
import DeleteForever from 'material-ui/svg-icons/action/delete-forever';
import ChildScriptsList from 'components/App/BotAdd/ChildScriptsList/ChildScriptsList';
import GoalField from 'components/App/BotAdd/GoalField/GoalField';

const renderScripts = ({ fields, meta: { touched, error, submitFailed }, handleOpen, childScriptsList }) => {

  return (
    <div>
      {fields.map((script, index) => {
          return (
            <div
              key={index}
              className="botadd-component__script-block"
            >
              <div className="botadd-component__script-buttons">
                <p className="botadd-component__script-title">Script №{index + 2}</p>
                <div>
                  <FlatButton
                    icon={<BorderColor />}
                    onTouchTap={handleOpen.bind(handleOpen, {
                      currentIdScript: fields.get(index).id
                    })}
                    className="botadd-component__script-btn"
                    primary={true}
                  />
                  <FlatButton
                    icon={<DeleteForever />}
                    onTouchTap={() => fields.remove(index)}
                    className="botadd-component__script-btn"
                    primary={true}
                  />
                </div>
              </div>
              
              <Field
                name={`${script}.userAnswer`}
                type="text"
                component={customTextField}
                label="User answer"
                fullWidth={true}
              />
              <GoalField />
              {/*
                <p>{formTemplate[0].toUpperCase() + formTemplate.slice(1)} form template</p>*/
              }
              <ChildScriptsList childScriptsList={childScriptsList} currentScriptId={fields.get(index).id}/>
              
            </div>
          )
        }
      )}
      <div>
        <RaisedButton
          label="Add script"
          labelPosition="after"
          icon={<Add />}
          fullWidth={true}
          primary={true}
          onTouchTap={() => fields.push({
            id: Math.floor(Math.random() * (100000000 - 1)) + 1,
            type: "TRANSITIONAL"
          })}
        />
        {(touched || submitFailed) && error && <span>{error}</span>}
      </div>
      
    </div>
  )
}

export default renderScripts;