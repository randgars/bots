import React from 'react';
import { shallow } from 'enzyme';
import PhoneForm from 'components\PhoneForm.js';

describe('<PhoneForm />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<PhoneForm />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "phoneform-component"', function () {
      expect(component.hasClass('phoneform-component')).to.equal(true);
    });
  });
});
