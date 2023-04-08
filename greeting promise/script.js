function greet(name){
    return new Promise((resolve, reject) => {
       resolve('hello '+name)
        
    })
}

greet('romi').then(result=>console.log(result))