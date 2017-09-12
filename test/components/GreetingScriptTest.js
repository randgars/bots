import React from 'react';
import { shallow } from 'enzyme';
import GreetingScript from 'components\GreetingScript.js';

describe('<GreetingScript />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<GreetingScript />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "greetingscript-component"', function () {
      expect(component.hasClass('greetingscript-component')).to.equal(true);
    });
  });
});
