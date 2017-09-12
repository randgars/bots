import React from 'react';
import { shallow } from 'enzyme';
import Registration from 'components\Registration.js';

describe('<Registration />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<Registration />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "registration-component"', function () {
      expect(component.hasClass('registration-component')).to.equal(true);
    });
  });
});
