function arr(){
    // creating a array of integer
    
    const arr =[2,3,4,5,62,6,4,3,7,8,5,9]
    return arr;
}

function  callback(arr){
    const  array =arr.map(x=> x*2)
    return array
}
console.log(callback(arr()))