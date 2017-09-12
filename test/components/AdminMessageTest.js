import React from 'react';
import { shallow } from 'enzyme';
import AdminMessage from 'components\AdminMessage.js';

describe('<AdminMessage />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<AdminMessage />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "adminmessage-component"', function () {
      expect(component.hasClass('adminmessage-component')).to.equal(true);
    });
  });
});
