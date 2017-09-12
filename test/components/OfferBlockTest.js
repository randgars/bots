import React from 'react';
import { shallow } from 'enzyme';
import OfferBlock from 'components\OfferBlock.js';

describe('<OfferBlock />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<OfferBlock />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "offerblock-component"', function () {
      expect(component.hasClass('offerblock-component')).to.equal(true);
    });
  });
});
