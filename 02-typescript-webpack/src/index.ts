import { ClothingProduct, ElectronicProduct, FreeProduct } from "./patterns/factory";
import type { Dev, Product } from "./types/";
import { Pokemon } from "./types/pokemon";
import { getPokemon } from "./utils/getPokemon";

const fran: Dev = {
  name: "franco",
  lastname: "di leo",
  eat: () => console.info("ñam ñam"),
  debug: () => console.log("ya wey"),
};

console.log("fran", fran);

async function pokemon() {
  const pokemon = await getPokemon<Pokemon>(1);
  console.log("pokemon name", pokemon.name);
}

pokemon();

const remeraXL = new ClothingProduct().createProduct("remera XL", 100, "XL");
const freeProduct: Pick<Product, "name"> = new FreeProduct().createProduct(
  "Comic YSY A"
);
console.log("free product: ", freeProduct.name);
const macbookPro = new ElectronicProduct().createProduct('Macbook pro', 1000)
