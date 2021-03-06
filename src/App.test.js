import React from 'react';
import Enzyme, { shallow, ShallowWrapper } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16'

import App from './App';
import { findAllByTestId } from '@testing-library/react';

Enzyme.configure({ adapter: new EnzymeAdapter()})

/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @param {object} state - Initial state for setup
 * @returns {ShallowWrapper}
*/

const setup = (props={}, state=null) => {
  const wrapper = shallow(<App {...props} />)
  if (state) wrapper.setState(state)
    return wrapper;
}

/**
 * Return ShallowWrapper containing node(s) with the give data-test value.
 * @param {ShallowWrapper} wrapper -  Enzyme shallow wrapper to search within.
 * @param {string} val - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}

let wrapper
beforeAll(() => {
  wrapper = setup();
})

test('renders without error', () =>{
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent.length).toBe(1);
});


test('renders counter display', () => {
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.length).toBe(1);
});

test('counter starts at 0', () => {
  const initialCounterState = wrapper.state('counter');
  expect(initialCounterState).toBe(0)
});

describe('Increment', () => {

  test('renders increment button', () => {
    const button = findByTestAttr(wrapper, 'increment-button');
    expect(button.length).toBe(1);
  });

  test('clicking increment button increments counter display', () => {
    const counter = 7;
    const wrapper = setup(null, { counter })

    // find button and click
    const button = findByTestAttr(wrapper, 'increment-button')
    button.simulate('click');

    // find display and test value
    const counterDisplay = findByTestAttr(wrapper, 'counter-display')
    expect(counterDisplay.text()).toContain(counter + 1)
  });
});

describe('Decrement', () => {

  test('renders decrement button', () => {
    const button = findByTestAttr(wrapper, 'decrement-button');
    expect(button.length).toBe(1);
  });

  test('clicking decrement button decrements counter display when state is greater than 0', () => {
    // Setup wrapper setting state to counter
    const counter = 7
    const wrapper = setup(null, { counter })

    // Find button and simulate click
    const button = findByTestAttr(wrapper, 'decrement-button')
    button.simulate('click')

    // Expect the counter display to decrement by 1
    const counterDisplay = findByTestAttr(wrapper, 'counter-display')
    expect(counterDisplay.text()).toContain(6)
  })

  test('error does not show when not needed', () => {
    // Implement error message using a 'hidden class' for the error div
    const errorDiv = findByTestAttr(wrapper, 'error-message');
    const errorHasHiddenClass = errorDiv.hasClass('hidden');
    expect(errorHasHiddenClass).toBe(true);
  })
})

describe('Counter is 0 and decrement is clicked', () => {
  beforeEach(() => {
    const button = findByTestAttr(wrapper, 'decrement-button');
    button.simulate('click')
    wrapper.update();
  })

  test('error shows', () => {
    const errorDiv = findByTestAttr(wrapper, 'error-message');
    const errorHasHiddenClass = errorDiv.hasClass('hidden');
    expect(errorHasHiddenClass).toBe(false);
  });

  test('counter still displays 0', () => {
    const counterDisplay = findByTestAttr(wrapper, 'counter-display')
    expect(counterDisplay.text()).toContain(0)
  })

  test('clicking increment clears error', () => {
    const button = findByTestAttr(wrapper, 'increment-button');
    button.simulate('click');

    const errorDiv = findByTestAttr(wrapper, 'error-message');
    const errorHasHiddenClass = errorDiv.hasClass('hidden');
    expect(errorHasHiddenClass).toBe(true);
  })
})
