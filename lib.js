var Promise = require('bluebird')

module.exports.getFarmers = function() {
  return [
    Promise.resolve({ name: 'Cobain' }),
    Promise.resolve({ name: 'Dirtrude' }),
    Promise.resolve({ name: 'Glenus', retired: true }),
    Promise.resolve({ name: 'Torcha' }),
  ]
}

var crops = {
  Cobain: [
    { type: 'orange', units: 1 },
    { type: 'mango', units: 2 },
  ],
  Dirtrude: [
    { type: 'kingdurian', units: 4 },
  ],
  Glenus: [
    { type: 'durian', units: 8 },
  ],
  Torcha: [
    { type: 'durian', units: 3 },
  ],
}

module.exports.getCropsProducedByFarmer = function(farmerName) {
  return Promise.resolve(crops[farmerName])
}

var fruitPower = {
  orange: 1,
  mango: 10,
  durian: 100,
  kingdurian: 1000,
}

module.exports.getCostOfSingleFruit = function(fruitName) {
  return Promise.resolve(fruitPower[fruitName])
}
