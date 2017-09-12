import React from 'react';
import { shallow } from 'enzyme';
import RegistrationConfirm from 'components\RegistrationConfirm.js';

describe('<RegistrationConfirm />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<RegistrationConfirm />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "registrationconfirm-component"', function () {
      expect(component.hasClass('registrationconfirm-component')).to.equal(true);
    });
  });
});
