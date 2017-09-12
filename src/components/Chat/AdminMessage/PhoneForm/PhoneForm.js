import React from 'react';
import './phoneform.css';
import { Field, reduxForm } from 'redux-form';
import validate from 'material-redux-form/validate';
import { MenuItem } from 'material-ui';
import customTextField from 'material-redux-form/customTextField';
import customSelectedField from 'material-redux-form/customSelectedField';
import { RaisedButton } from 'material-ui';

const styles = {
  inputStyle: {
    fontSize: '0.9em'
  },
  hintStyle: {
    fontSize: '0.9em'
  },
  timeFieldInput: {
    fontSize: '0.9em',
    textAlign: 'center'
  }
}

class PhoneForm extends React.Component {
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
          inputStyle={styles.inputStyle}
          hintStyle={styles.hintStyle}
        />
        <Field
          name="country"
          component={customSelectedField}
          hintText="Country"
          hintStyle={styles.hintStyle}
          menuItemStyle={styles.hintStyle}
        >
          <MenuItem value="belarus" primaryText="Belarus" />
          <MenuItem value="russia" primaryText="Russia" />
          <MenuItem value="ukraine" primaryText="Ukraine" />
        </Field>
        <Field
          name="phone"
          component={customTextField}
          hintText="Phone number"
          inputStyle={styles.inputStyle}
          hintStyle={styles.hintStyle}
        />
        <div className="phone-form__block-time">
          <div className="phone-form__block-time__start-time">
            <Field
              name="startHours"
              type="number"
              component={customTextField}
              placeholder="HH"
              className="phone-form__input-time"
              inputStyle={styles.timeFieldInput}
              hintStyle={styles.hintStyle}
            /> : 
            <Field name="startMinutes"
              type="number"
              component={customTextField}
              placeholder="MM"
              className="phone-form__input-time"
              inputStyle={styles.timeFieldInput}
              hintStyle={styles.hintStyle}
            />
          </div>
          <div className="phone-form__block-time__end-time">
            <Field name="endHours"
              type="number"
              component={customTextField}
              placeholder="HH"
              className="phone-form__input-time"
              inputStyle={styles.timeFieldInput}
              hintStyle={styles.hintStyle}
            /> : 
            <Field name="endMinutes"
              type="number"
              component={customTextField}
              placeholder="MM"
              className="phone-form__input-time"
              inputStyle={styles.timeFieldInput}
              hintStyle={styles.hintStyle}
            />
          </div>
        </div>
        
        <Field
          name="notes"
          component={customTextField}
          hintText="Notes"
          multiLine={true}
          rows={1}
          rowsMax={2}
          inputStyle={styles.inputStyle}
          hintStyle={styles.hintStyle}
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

PhoneForm.displayName = 'PhoneForm';
PhoneForm.propTypes = {};
PhoneForm.defaultProps = {};

export default reduxForm({
  form: 'phoneForm',
  validate
})(PhoneForm);