function scan(array){
    temp = 0;
    array.forEach(element => {
        if(element == "contraband") temp += 1;
    });
    return temp;
}