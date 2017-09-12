import React from 'react';
import { shallow } from 'enzyme';
import EmailForm from 'components\EmailForm.js';

describe('<EmailForm />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<EmailForm />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "emailform-component"', function () {
      expect(component.hasClass('emailform-component')).to.equal(true);
    });
  });
});
