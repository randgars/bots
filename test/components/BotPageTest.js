import React from 'react';
import { shallow } from 'enzyme';
import BotPage from 'components\BotPage.js';

describe('<BotPage />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<BotPage />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "botpage-component"', function () {
      expect(component.hasClass('botpage-component')).to.equal(true);
    });
  });
});
