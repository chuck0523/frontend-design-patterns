let instance;
let counter = 0

class Counter {
    constructor() {
        if(instance) {
            // 複数のインスタンスを作成しないよう制約
            throw new Error('Counter is a singleton class')
        }
        instance = this
    }

    getInstance() {
        return this
    }

    getCount() {
        return counter
    }

    increment() {
        counter++
    }

    decrement() {
        counter--
    }
}

const singletonCounter = Object.freeze(new Counter());
export default singletonCounter
