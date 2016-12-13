 const state = {
  currentLocation: 'Bronx',
  otherLocations: [
    'Ghetto',
    'Central Park',
    'Manhatten',
    'Coney Island',
    'Brooklyn'
  ],
  cash: 2000,
  debt: 5500,
  inventory: {
    current: 0,
    max: 100
  },
  bank: 0,
  day: 0,
  totalDays: 30,
  drugs: {
    hashish: {
      qty: 0,
      price: 0,
      special: 'normal'
    },
    weed: {
      qty: 0,
      price: 0,
      special: 'normal'
    },
    ludes: {
      qty: 0,
      price: 0,
      special: 'normal'
    },
    opium: {
      qty: 0,
      price: 0,
      special: 'normal'
    },
    pcp: {
      qty: 0,
      price: 0,
      special: 'normal'
    },
    peyote: {
      qty: 0,
      price: 0,
      special: 'normal'
    },
    shrooms: {
      qty: 0,
      price: 0,
      special: 'normal'
    },
    speed: {
      qty: 0,
      price: 0,
      special: 'normal'
    },
    acid: {
      qty: 0,
      price: 0,
      special: 'normal'
    },
    cocain: {
      qty: 0,
      price: 0,
      special: 'normal'
    },
    heroin: {
      qty: 0,
      price: 0,
      special: 'normal'
    },
    mda: {
      qty: 0,
      price: 0,
      special: 'normal'
    } //more drugs can go here...
  }
}

export default state;
