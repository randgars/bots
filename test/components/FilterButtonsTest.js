import React from 'react';
import { shallow } from 'enzyme';
import FilterButtons from 'components\FilterButtons.js';

describe('<FilterButtons />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<FilterButtons />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "filterbuttons-component"', function () {
      expect(component.hasClass('filterbuttons-component')).to.equal(true);
    });
  });
});
