const person: Record<string, string | number> = {
    name: 'John Doe',
    age: 30,
    nationality: "American"
}

export const personProxy = new Proxy(person, {
    get: (obj,prop) => {
        const value = Reflect.get(obj, prop)
        if(!value) {
            console.log('not found!');
        }
        console.log(`value of ${String(prop)} is ${value}`)
        return value
    },
    set: (obj, prop, value) => {
        if(prop === 'age' && typeof value !== "number") {
            console.log('age must be a number')
            return false
        } else if (prop === 'name' && value.length < 2) {
            console.log('name must be at least 2 characters')
            return false
        } else {
            const key = String(prop)
            console.log(`setting ${key} from ${Reflect.get(obj, prop)} to ${value}`);
            return Reflect.set(obj, prop, value);
        }
    }
})