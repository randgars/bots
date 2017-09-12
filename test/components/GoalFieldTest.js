import React from 'react';
import { shallow } from 'enzyme';
import GoalField from 'components\GoalField.js';

describe('<GoalField />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<GoalField />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "goalfield-component"', function () {
      expect(component.hasClass('goalfield-component')).to.equal(true);
    });
  });
});
