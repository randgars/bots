import React from 'react';
import { shallow } from 'enzyme';
import MaterialTextField from 'components\MaterialTextField.js';

describe('<MaterialTextField />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<MaterialTextField />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "materialtextfield-component"', function () {
      expect(component.hasClass('materialtextfield-component')).to.equal(true);
    });
  });
});
