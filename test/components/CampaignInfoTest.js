import React from 'react';
import { shallow } from 'enzyme';
import CampaignInfo from 'components\CampaignInfo.js';

describe('<CampaignInfo />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<CampaignInfo />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "campaigninfo-component"', function () {
      expect(component.hasClass('campaigninfo-component')).to.equal(true);
    });
  });
});
