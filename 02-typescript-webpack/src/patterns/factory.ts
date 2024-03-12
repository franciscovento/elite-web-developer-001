// 3 tipos de patrones de diseño
// Estructurales, comportamiento y creacionales
// Creacionales: Mecanismos de creación de un objeto ganando flexibilidad
// Estructurales: Abstraer el código más flexibles
// De comportamiento: Comunicar efectivamente objetos entre si

// patrón creacional

interface Product {
  name: string;
  price: number;
  description: string;
}

class BaseProduct implements Product {
  // public, private, protected
  public name: string;
  public price: number;
  constructor(name: string, price: number, public description: string) {
    this.name = name;
    this.price = price;
  }
}
// ¿Lit element?
export class ProductFactory {
  protected createProduct(name: string, price: number, description: string) {
    return new BaseProduct(name, price, description);
  }
}

export class ElectronicProduct extends ProductFactory {
  constructor() {
    super(); // instancia a la clase que se extiende
  }

  public createProduct(name: string, price: number): BaseProduct {
    const description = "El producto electronico de la tienda X";
    return super.createProduct(name, price, description);
  }
}

export class ClothingProduct extends ProductFactory {
  constructor() {
    super();
  }

  public createProduct(name: string, price: number, size: string): BaseProduct {
    const description = `Size ${size}`;
    if (description.length === 0) throw new Error("");
    return super.createProduct(name, price, description);
  }
}

export class FreeProduct extends ProductFactory {
  constructor() {
    super();
  }

  public createProduct(name: string): BaseProduct {
    return super.createProduct(name, 0, "");
  }
}
