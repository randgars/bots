import React from 'react';
import './campaign.css';
import {RaisedButton} from 'material-ui';
import {
  Field,
  reduxForm
} from 'redux-form';
import customTextField from 'material-redux-form/customTextField';
import validate from 'material-redux-form/validate';
import FileDownload from 'material-ui/svg-icons/file/file-download';

class Campaign extends React.Component {
  constructor(props) {
    super(props);
    this.saveCampaign = this.saveCampaign.bind(this);
  }

  saveCampaign(event){
    
    const data = {
      name: event.name,
      overview: event.overview,
      site: event.domen
    }
    
    this.props.actions.saveCampaign(data);
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <div className="campaign-component">
        <div className="campaign-wrap">
          <h2 className="campaign-component__title">Add campaign</h2>
          <form onSubmit={handleSubmit(props => this.saveCampaign(props))}>
            <Field
              name="name"
              component={customTextField}
              label="Name"
              fullWidth={true}
            />
            <Field
              name="domen"
              component={customTextField}
              label="Site"
              fullWidth={true}
            />
            <Field
              name="overview"
              component={customTextField}
              label="Overview"
              fullWidth={true}
              multiLine={true}
              rows={1}
              rowsMax={8}
            />
            <div className="campaign-component__save-btn-block">
              <RaisedButton
                label="Save"
                primary={true}
                labelPosition="after"
                icon={<FileDownload />}
                className="campaign-component__button"    
              >
                <input className="input-hidden" type="submit" disabled={submitting}/>
              </RaisedButton>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

Campaign.displayName = 'Campaign';
Campaign.propTypes = {};
Campaign.defaultProps = {};

export default reduxForm({
  form: 'campaignAdd',
  validate
})(Campaign)