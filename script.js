
function nameArrow() {
    satTimeout( () => {
        console.log('Arrow: '+ this.name);
    }, 100)
};

nameFunction() {
    setTimeout(function() {
        console.log('Function: ' + this.name)
    }, 100)
}

let person = new Person('Bob')
person.nameArrow()
person.nameFunction()
console.log(this.name)


function human(n) {
    const name = n

    function sayHi() {
        console.log(`HiI am ${name}`)
    }
    function sayFeel() {
        console.log(`${name} is feeling okay!`)
    }
    return {
        sayHi,
        sayFeel 
    }
}