import React from 'react';
import { shallow } from 'enzyme';
import TabHeader from 'components\TabHeader.js';

describe('<TabHeader />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<TabHeader />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "tabheader-component"', function () {
      expect(component.hasClass('tabheader-component')).to.equal(true);
    });
  });
});
