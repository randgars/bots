import React from 'react';
import { shallow } from 'enzyme';
import RegistrationUnverified from 'components\RegistrationUnverified.js';

describe('<RegistrationUnverified />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<RegistrationUnverified />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "registrationunverified-component"', function () {
      expect(component.hasClass('registrationunverified-component')).to.equal(true);
    });
  });
});
