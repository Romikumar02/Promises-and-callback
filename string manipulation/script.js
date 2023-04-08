let str =''
function manipulatestring(str,callback){
    const result = callback(str)
    return result;
}
function logstring(str){
  return  str.toUpperCase();
}
console.log(manipulatestring('hello my name is romi',logstring));