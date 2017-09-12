import React from 'react';
import { shallow } from 'enzyme';
import Chat from 'components\Chat.js';

describe('<Chat />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<Chat />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "chat-component"', function () {
      expect(component.hasClass('chat-component')).to.equal(true);
    });
  });
});
