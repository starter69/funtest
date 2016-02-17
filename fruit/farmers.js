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
  return Promise.all(getFarmers())
  .then(function(farmers){
    // Return promise for array of crop data of all farmers
    return Promise.all(farmers.map(function(farmer){
      return getCropsProducedByFarmer(farmer.name)
    }))
  })
  .then(function(cropData){
    // Based on the array of crop data, flattens the array and calculate sum
    return Promise.resolve(
      _.chain(cropData)
      .flatten()
      .sumBy('units')
      .value()
    )
  })
}

// Calculate the cost of all non-retired farmers' fruits using the functions
// getFarmers, getCropsProducedByFarmer and getCostOfSingleFruit.
// The cost of a Farmer's fruits can be calculated by summing the cost of each
// of their fruits, which is the cost of a single fruit times the number of units
// they have produced.
exports.calculateTotalFarmerFruitCost = function() {
  return Promise.all(getFarmers())
  .then(function(farmers){
    // Return promise for crop data of all un-retired farmers
    return Promise.all(
      _.chain(farmers)
      .filter(function(farmer){
        return !farmer.retired
      })
      .map(function(farmer){
        return getCropsProducedByFarmer(farmer.name)
      })
      .value()
    )
  })
  .then(function(cropData){
    return Promise.all(
      _.chain(cropData)
      .flatten()
      .map(function(cropDataRow){
        // For each crop record, calculate units*price
        return getCostOfSingleFruit(cropDataRow.type)
          .then(function(price){
            return Promise.resolve(price * cropDataRow.units)
          })
      })
      .value()
    )
  })
  .then(function(priceArray){
    // priceArray has total price for each fruit. Return sum of this array
    return Promise.resolve(
      _.sum(priceArray)
    )
  })
}
