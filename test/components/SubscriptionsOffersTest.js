import React from 'react';
import { shallow } from 'enzyme';
import SubscriptionsOffers from 'components\SubscriptionsOffers.js';

describe('<SubscriptionsOffers />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<SubscriptionsOffers />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "subscriptionsoffers-component"', function () {
      expect(component.hasClass('subscriptionsoffers-component')).to.equal(true);
    });
  });
});
