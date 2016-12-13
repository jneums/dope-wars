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
  bank: 0,
  day: 0,
  totalDays: 30,
  drugs: {
    hashish: {
      qty: 0,
      price: 0,
      special: 'normal'
    } //more drugs will go here...
  }
}

export default state;
