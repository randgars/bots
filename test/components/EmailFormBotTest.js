import React from 'react';
import { shallow } from 'enzyme';
import EmailFormBot from 'components\EmailFormBot.js';

describe('<EmailFormBot />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<EmailFormBot />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "emailformbot-component"', function () {
      expect(component.hasClass('emailformbot-component')).to.equal(true);
    });
  });
});
