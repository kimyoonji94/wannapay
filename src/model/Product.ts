class Product {
  name: string;
  qty?: number;
  price: number;
  desc?: string;
  constructor(name: string, qty: number, price: number, desc: string) {
    this.name = name;
    this.qty = qty;
    this.price = price;
    this.desc = desc;
  }
}

export default Product;
