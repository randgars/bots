import React from 'react';
import { shallow } from 'enzyme';
import UserMessage from 'components\UserMessage.js';

describe('<UserMessage />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<UserMessage />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "usermessage-component"', function () {
      expect(component.hasClass('usermessage-component')).to.equal(true);
    });
  });
});
