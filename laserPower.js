function calculatePower(array){
    return array.reduce((sum, current) => sum += current * 2, 0);
}