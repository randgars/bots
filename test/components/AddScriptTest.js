import React from 'react';
import { shallow } from 'enzyme';
import AddScript from 'components\AddScript.js';

describe('<AddScript />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<AddScript />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "addscript-component"', function () {
      expect(component.hasClass('addscript-component')).to.equal(true);
    });
  });
});
