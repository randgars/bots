import React from 'react';
import { shallow } from 'enzyme';
import GreetingScriptInfo from 'components\GreetingScriptInfo.js';

describe('<GreetingScriptInfo />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<GreetingScriptInfo />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "greetingscriptinfo-component"', function () {
      expect(component.hasClass('greetingscriptinfo-component')).to.equal(true);
    });
  });
});
