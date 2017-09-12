import React from 'react';
import { shallow } from 'enzyme';
import BotInfo from 'components\BotInfo.js';

describe('<BotInfo />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<BotInfo />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "botinfo-component"', function () {
      expect(component.hasClass('botinfo-component')).to.equal(true);
    });
  });
});
