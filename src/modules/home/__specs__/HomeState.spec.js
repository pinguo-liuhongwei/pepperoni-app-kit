/*eslint-disable max-nested-callbacks, no-unused-expressions*/

import {Effects} from 'redux-loop';
import sinon from 'sinon';
import {describe, it, beforeEach, afterEach} from 'mocha';
import {expect} from 'chai';
import {initialState, dispatch} from '../../../../test/state';
import * as HomeStateActions from '../HomeState';

describe('HomeState', () => {

  // Example of how to test multiple dispatches in series
  describe('increment', () => {
    const getValue = state => state.getIn(['home', 'value']);

    it('should increment the value property by one', () => {
      const [secondState] = dispatch(initialState, HomeStateActions.increment());
      expect(getValue(secondState)).to.equal(getValue(initialState) + 1);

      const [thirdState] = dispatch(secondState, HomeStateActions.increment());
      expect(getValue(thirdState)).to.equal(getValue(secondState) + 1);
    });
  });

  describe('reset', () => {
    it('should reset the home state to initial value', () => {
      // create an incremented state to test against
      const [modifiedState] = dispatch(initialState, HomeStateActions.increment());
      expect(modifiedState.get('home')).to.not.equal(initialState.get('home'));

      // reset to original and verify it === initial state
      const [resetState] = dispatch(modifiedState, HomeStateActions.reset());
      expect(resetState.get('home')).to.equal(initialState.get('home'));
    });
  });

  // Example of how to test side effects returned from reducers
  describe('random', () => {

    const [nextState, effects] = dispatch(initialState, HomeStateActions.random());

    it('should update loading bit', () => {
      expect(nextState.getIn(['home', 'loading'])).to.equal(true);
    });

    it('should trigger a requestRandomNumber side effect', () => {
      expect(effects).to.eql(
        Effects.promise(HomeStateActions.requestRandomNumber)
      );
    });
  });

  // Example of how to test async action creators
  describe('requestRandomNumber', () => {

    // randomizer uses timeouts to delay response, let's make it execute
    // instantly to improve test speed
    const sandbox = sinon.sandbox.create();
    beforeEach(() => sandbox.stub(global, 'setTimeout', setImmediate));
    afterEach(() => sandbox.restore());

    it('should generate a random number and dispatch it', async () => {
      const action = await HomeStateActions.requestRandomNumber();
      expect(action.payload).to.be.a('number');

      const [nextState] = dispatch(initialState, action);
      expect(nextState.getIn(['home', 'value'])).to.equal(action.payload);
      expect(nextState.getIn(['home', 'loading'])).to.equal(false);
    });
  });
});
