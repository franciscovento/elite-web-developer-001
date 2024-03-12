/*
    Patrón de comportamiento que se utiliza cuando existen algoritmos intercambiables
    El cliente define cual es el algoritmo que mejor se adapta al problema
*/

interface DiscountStrategy {
    applyDiscount(amount:number): number
}

class NoDiscount implements DiscountStrategy {
    public applyDiscount(amount: number): number {
        return amount
    }
}

class PercentageDiscount implements DiscountStrategy {
    private percentage: number
    constructor(percentage: number) {
        this.percentage = percentage
    }

    applyDiscount(amount: number): number {
        const discount = (amount * this.percentage) / 100
        return amount - discount
    }
}

// deprecated
class FixedDiscount implements DiscountStrategy {
    private discountAmount: number
    constructor(discountAmount: number){
        this.discountAmount = discountAmount
    }

    applyDiscount(amount: number): number {
        return amount - this.discountAmount
    }
}


class PaymentProcessor {
    private discountStrategy: DiscountStrategy = new NoDiscount()

    setDiscountStrategy(strategy:DiscountStrategy): void {
        this.discountStrategy = strategy
    }

    processPayment(amount:number): number {
        return this.discountStrategy.applyDiscount(amount)
    }
}


const processor = new PaymentProcessor()
let amount = processor.processPayment(100) // amount = 100

processor.setDiscountStrategy(new PercentageDiscount(10)) // 
amount = processor.processPayment(100) // 90
processor.setDiscountStrategy(new FixedDiscount(50))
amount = processor.processPayment(100) // 50

/////////////////////////////////////////////////////////////////////

interface Product {
    name: string
    price: number
    brand: string
    category: string
    description : string
}
// Filtro 
// Tenemos una aplicación que tiene que resolver un filtrado de productos por precio, por categoría, por marca
interface Filter {
    filter(products: Product[]): Product[]
}

class PriceFilter implements Filter {
    constructor(public minPrice: number, public maxPrice: number){}

    filter(products: Product[]): Product[] {
        return products.filter(product => product.price >= this.minPrice && product.price <= this.maxPrice)
    }
}
