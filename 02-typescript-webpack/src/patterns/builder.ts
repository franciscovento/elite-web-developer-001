interface Person {
    name?: string
    age?: number
    email?: string
    address?: string
}

class PersonBuilder {
    private person: Person

    constructor() {
        this.person = {}
    }

    withName(name:string) : PersonBuilder {
        this.person.name = name
        return this
    }

    withAge(age:number) : PersonBuilder {
        this.person.age = age
        return this
    }

    withEmail(email:string) : PersonBuilder {
        this.person.email = email
        return this
    }

    withAddress(address:string) : PersonBuilder {
        this.person.address = address
        return this
    }

    build(): Person {
        return this.person
    }
}

const builder = new PersonBuilder()
const fran = builder.withName('fran').withAge(29).withEmail('dileo.francoj.....').build()
console.log(fran.name, fran.age, fran.email)

/*
    Imaginemos que queremos crear una función a la cual le pasamos un objeto persona y un array de keys
    ['name','age'] // {name: 'Fran', age:29}
*/
// t: person : {name, age, address}

const getData = <T, K extends keyof T>(obj:T,props: K[]) => {
    // T: Person // {name, age, email, address}
    // K  ['name,'age']
    const result = {} as Pick<T,K> // {}
    props.forEach((prop) => {
        result[prop] = obj[prop]
    })

    return result
}

const person : Person = {
    name:'fran',
    age:29,
    address: 'La dirección'
}

const basicData = getData(person,['name','age'])
console.log('basicData', basicData.name)

export const personBuilder = () => {
    let person:Person
    return {
        withName: (name: string) => {
            person.name = name
            return this
        },

        withAge: function(age: number) {
            person.age = age
            return this
        }
    }
}

const product: Pick<Product, 'name' | 'price' | 'description'> = {
    name: 'play station',
    price: 2000,
    description: 'La play',
}


const productData = getData(product,['name','description'])

/*
Explicación:

K extends keyof T es una forma de especificar una restricción genérica en una función. 
En este caso, la función getData tiene dos parámetros genéricos: T y K.

T es el tipo de objeto que se pasa como argumento a la función.
K es una "llave" (key) del objeto T.
La cláusula extends keyof T establece que K puede ser cualquier llave válida del tipo T. 
En otras palabras, K debe ser 
una de las llaves existentes en el tipo T.

Por ejemplo, si T es { name: string; age: number; address: string }, entonces K podría ser 'name', 'age' o 'address', 
ya que son las llaves válidas de ese tipo.

Esta restricción se utiliza para garantizar que solo se puedan pasar llaves válidas del objeto T como elementos del 
array props en la función getData. Esto proporciona verificación de tipos estática en tiempo de compilación, 
lo que ayuda a prevenir errores relacionados con el acceso a propiedades inexistentes en el objeto T.
*/