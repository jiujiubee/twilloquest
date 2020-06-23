function getFirstAmountSorted(arr, num){
    arr.sort();
    let temp = []
    temp = arr.slice(0, num)
    return temp
}