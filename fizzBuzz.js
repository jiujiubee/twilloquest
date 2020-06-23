const arg1 = Number(process.argv[2]);

if(arg1 % 3 == 0 && arg1 % 5 == 0){
    console.log("JavaScript");
}else if(arg1 % 3 == 0){
    console.log("Java");
}else if(arg1 % 5 == 0){
    console.log("Script");
}else{
    console.log(arg1);
}