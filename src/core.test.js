import React from 'react';
import ReactDOM from 'react-dom';
//test libraries
import chai from 'chai';
import chaiImmutable from 'chai-immutable';
chai.use(chaiImmutable);
// immutable helps keep state pure
// Map is like an object, to access the
// variables though use Map.get() and to set use
// Map.set()
import {Map} from 'immutable';

import { newGame } from './core';

it('begins the game, initializing the state', () => {
  const state = Map();
  const days = 30;
  const nextState = newGame(state, days);

  expect(nextState).to.equal(Map({
    currentLocation: 'Bronx',
    cash: 2000,
    debt: 5500,
    bank: 0,
    day: 0,
    drugs: {
      hashish: {
        qty: 0,
        price: 0,
        special: 'normal'
      } //more drugs will go here...
    }
  }))
});
