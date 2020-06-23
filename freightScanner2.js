function scan(array){
    temp = [];
    array.forEach((item, index,array) => {
        if(item == "contraband") temp.push(index);
    });
    return temp;
}