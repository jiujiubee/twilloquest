function scanAndFilter (array, str){
    temp = [];
    array.forEach(element => {
        if(element != str) temp.push(element);
    });
    return temp
}