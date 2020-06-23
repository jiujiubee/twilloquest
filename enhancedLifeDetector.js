const arg1 = process.argv[2];

if(arg1 == 0){
    console.log("alive");
}else if(arg1 == 1){
    console.log("flowering");
}else if(arg1 == 2){
    console.log("shedding");
}else{
    console.log("other");
}