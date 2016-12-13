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
//import state tree
import state from './state';

import { newGame } from './core';
import { move } from './core';

describe('newGame()', () => {

    it('begins the game, initializing the state', () => {
      const state = Map();
      const days = 30;
      const nextState = newGame(state, days);

      expect(nextState).to.equal(Map(state));
    });

});

describe('move()', () => {

  it('new currentLocation, old one goes into array', () => {
    const state = state;
    const newLocation = 'Ghetto';
    const nextState = move(state, newLocation);

    expect(nextState.get('currentLocation')).to.equal('Ghetto');
    expect(nextState.get('otherLocations')).to.equal([
        'Central Park',
        'Manhatten',
        'Coney Island',
        'Brooklyn',
        'Bronx'
    ]);
  })

  it('sets prices for drugs', () => {
    const state = state;
    const newLocation = 'Ghetto';
    const nextState = move(state, newLocation);

    expect(nextState.drugs.hashish.get('price')).to.not.equal(0);
    expect(nextState.drugs.weed.get('price')).to.not.equal(0);
    expect(nextState.drugs.speed.get('price')).to.not.equal(0);
  })

} )
