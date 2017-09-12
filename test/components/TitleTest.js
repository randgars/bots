import React from 'react';
import { shallow } from 'enzyme';
import Title from 'components\Title.js';

describe('<Title />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<Title />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "title-component"', function () {
      expect(component.hasClass('title-component')).to.equal(true);
    });
  });
});
