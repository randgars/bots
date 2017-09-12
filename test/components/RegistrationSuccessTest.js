import React from 'react';
import { shallow } from 'enzyme';
import RegistrationSuccess from 'components\RegistrationSuccess.js';

describe('<RegistrationSuccess />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<RegistrationSuccess />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "registrationsuccess-component"', function () {
      expect(component.hasClass('registrationsuccess-component')).to.equal(true);
    });
  });
});
