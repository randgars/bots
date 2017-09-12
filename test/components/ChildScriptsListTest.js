import React from 'react';
import { shallow } from 'enzyme';
import ChildScriptsList from 'components\ChildScriptsList.js';

describe('<ChildScriptsList />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<ChildScriptsList />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "childscriptslist-component"', function () {
      expect(component.hasClass('childscriptslist-component')).to.equal(true);
    });
  });
});
