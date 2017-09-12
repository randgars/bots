import React from 'react';
import { shallow } from 'enzyme';
import SignUp from 'components\SignUp.js';

describe('<SignUp />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<SignUp />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "signup-component"', function () {
      expect(component.hasClass('signup-component')).to.equal(true);
    });
  });
});
