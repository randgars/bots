import React from 'react';
import './goalfield.css';
import { Field } from 'redux-form';
import customTextField from 'material-redux-form/customTextField';

class GoalField extends React.Component {

  render() {
    return (
      <Field
        name={`${script}.nextQuestion`}
        type="text"
        component={customTextField}
        label="Next question"
        fullWidth={true}
      />
    );
  }
}

GoalField.displayName = 'GoalField';
GoalField.propTypes = {};
GoalField.defaultProps = {};

export default GoalField;
