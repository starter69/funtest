require('chai').should()

var farmers = require('./farmers')

describe('farmers', function() {
  it('countNumberOfFruits should get correct result', function() {
    var ret = farmers.countNumberOfFruits().then(function(count) {
      count.should.equal(18)
    })
  })

  it('calculateTotalFarmerFruitCost should get correct result', function() {
    var ret = farmers.calculateTotalFarmerFruitCost().then(function(result) {
      result.should.equal(4321)
    })
  })
})
