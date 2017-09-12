import React from 'react';
import { shallow } from 'enzyme';
import TabList from 'components\TabList.js';

describe('<TabList />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<TabList />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "tablist-component"', function () {
      expect(component.hasClass('tablist-component')).to.equal(true);
    });
  });
});
