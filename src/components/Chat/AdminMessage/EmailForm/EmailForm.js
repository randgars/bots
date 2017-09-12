import React from 'react';
import './emailform.css';
import { Field, reduxForm } from 'redux-form';
import validate from 'material-redux-form/validate';
import customTextField from 'material-redux-form/customTextField';
import { RaisedButton } from 'material-ui';

class EmailForm extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { handleSubmit, pristine, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field
          name="name"
          component={customTextField}
          hintText="Name"
        />
        <Field
          name="email"
          component={customTextField}
          hintText="Email"
        />
        <Field
          name="notes"
          component={customTextField}
          hintText="Notes"
          multiLine={true}
          rows={1}
          rowsMax={3}
        />
        <RaisedButton
          label="Submit"
          primary={true}
          fullWidth={true}
        >
          <input className="input-hidden" type="submit" disabled={pristine || submitting}/>
        </RaisedButton>
      </form>
    );
  }
}

EmailForm.displayName = 'EmailForm';
EmailForm.propTypes = {};
EmailForm.defaultProps = {};

export default reduxForm({
  form: 'emailForm',
  validate
})(EmailForm);