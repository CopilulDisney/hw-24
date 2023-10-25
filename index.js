const numbers = [1,2,3,4,5,6] //Exercitiu 1
Array.prototype.customFilter = function(callback) { //Acesta nu stiu de ce nu imi da rezultatul
    const filteredArray = [];
    for (let i = 0; i < this.lenght; i++){
        if(callback(this[i], i, this)) {
            filteredArray.push(this[i]);
        }
    }
    return filteredArray;
}


const evenNumbers = numbers.customFilter(num => num % 2 === 0)
console.log(evenNumbers)

Array.prototype.customSome = function(callback) {
    for(let i = 0; i < this.length; i++){
        if (callback(this[i], i, this)) {
            return true;
        }
    }
    return false;
}

const hasEven = numbers.customSome(num => num % 2 === 0)
console.log(hasEven)

Array.prototype.customEvery = function(callback) {
    for (let i = 0; i< this.lenght; i++){
        if(!callback(this[i], i, this)){
            return false
        }
    }
    return true
}

const allEven = numbers.customEvery(num => num % 2 === 0)
console.log(allEven)

let p = new Promise((res, rej) => { //Exercitiu 2
    let a = 1 + 1
    if (a === 2) {
        res('completed')
    } else {
        rej('failed')
    }
})

p.then((mess) => {
    console.log('Task ' + mess)
}).catch((mess) => {
    console.log('Task ' + mess)
}).finally(() => {
    console.log('Better luck next time')
})

const promises1 = new Promise((res, rej) => res('promisiunea 1')) //Exercitiu 3
const promises2 = new Promise((res, rej) => res('promisiunea 2'))
const promises3 = new Promise((res, rej) => res('promisiunea 3'))

Promise.all([
    promises1,
    promises2,
    promises3
]).then((mess) => {
    console.log(mess)
})