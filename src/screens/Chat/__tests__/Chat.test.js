import React from 'react';
import {shallow} from 'enzyme';
import Chat from '../index';

/**
 * Factory function to create a shallowWrapper for the Button component
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @param {object} state - Initil state for setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}, state = null) => {
  const wrapper = shallow(<Chat {...props} />);

  if (state) {
    wrapper.setState(state);
  }
  return wrapper;
};
/**
 * Returns ShallowWrapper containing node(s) with the given data-set value
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within
 * @param {string} val - Value of data-set attribute for search.
 * @returns {ShallowWrapper}
 */
const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[testID="${val}"]`);
};

test('chat screen renders without error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-chat');
  expect(appComponent.length).toBe(1);
});
