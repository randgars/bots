import React from 'react';
import { shallow } from 'enzyme';
import ScriptInfo from 'components\ScriptInfo.js';

describe('<ScriptInfo />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<ScriptInfo />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "scriptinfo-component"', function () {
      expect(component.hasClass('scriptinfo-component')).to.equal(true);
    });
  });
});
