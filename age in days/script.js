function ageindays(person){
    const fullName= person.Fullname
    const ageindays = person.age*365
    return function(){
console.log(`The person's full name is ${fullName} and their age in days is ${ageindays}`);
    }
    
}

const person={
    Fullname: "Romi kumar",
    age : 23

}
const logresult =ageindays(person)
logresult()