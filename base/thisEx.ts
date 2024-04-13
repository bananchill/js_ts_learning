const user = {
    name: 'Alex',
    greet() {
        console.log(`Hello, my name is ${this.name}`)
    },
}

const greet = user.greet
greet()

