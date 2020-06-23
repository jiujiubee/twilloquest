function calculateMass(array){
    return array.reduce((sum, current) => sum += current.length, 0)
}