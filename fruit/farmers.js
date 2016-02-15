var _ = require('lodash')
var Promise = require('bluebird')

var lib = require('../lib')

// getFarmers takes no argument and returns Array< Promise<Farmer> >
//   Farmers are objects including the field `name` and the field `retired`
//   if the farmer is retired.
var getFarmers = lib.getFarmers

// Pass the farmer name.
// Returns Promise< Array<Crop> >
//   Crop has the fields `type` and `units`
var getCropsProducedByFarmer = lib.getCropsProducedByFarmer

// Pass the type of fruit.
// Return Promise<Number>
//   The number is the cost of one unit of the fruit.
var getCostOfSingleFruit = lib.getCostOfSingleFruit

//////////////////////////////////////////////////////////////////////////////////////////
// Implement the functions below this point
//////////////////////////////////////////////////////////////////////////////////////////

// Calculate the number of units of fruits owned by all farmers (whether
// retired or not) using getFarmers and getCropsProducedByFarmer.
exports.countNumberOfFruits = function() {
  // TODO: replace this with your code
  return Promise.resolve(0)
}

// Calculate the cost of all non-retired farmers' fruits using the functions
// getFarmers, getCropsProducedByFarmer and getCostOfSingleFruit.
// The cost of a Farmer's fruits can be calculated by summing the cost of each
// of their fruits, which is the cost of a single fruit times the number of units
// they have produced.
exports.calculateTotalFarmerFruitCost = function() {
  // TODO: replace this with your code
  return Promise.resolve(0)
}
