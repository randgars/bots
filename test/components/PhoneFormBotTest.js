import React from 'react';
import { shallow } from 'enzyme';
import PhoneFormBot from 'components\PhoneFormBot.js';

describe('<PhoneFormBot />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<PhoneFormBot />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "phoneformbot-component"', function () {
      expect(component.hasClass('phoneformbot-component')).to.equal(true);
    });
  });
});
