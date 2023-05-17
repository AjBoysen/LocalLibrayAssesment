function findById(array, target){
    return array.find((arrayI) => arrayI.id === target)
  }
  module.exports = findById