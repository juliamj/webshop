export default class ShoppingCart {
  constructor() {
    this.products = [];
    this.totalPrice = 0;
  }
  addProduct(product) {
    // add product to cart
    if (product.quantity === 0) {
      this.products.push(product);
      product.quantity++;
      this.totalPrice += product.price[0];
    } else {
      product.quantity++;
      this.totalPrice += product.price[0];
    }
  }
  removeProduct(product) {
    // remove product from shopping cart
    const index = this.products.indexOf(product);
    this.products.splice(index, 1);
    this.totalPrice -= product.price[0] * product.quantity;
    product.quantity = 0;
  }
  purchase() {
    // purchase whole shopping cart
    this.products.forEach((elem) => {
      elem.quantity = 0;
    });
    this.products.splice(0, this.products.length);
    this.totalPrice = 0;
    //if (DigitalProduct) {
    // ask customer to provide an email address
    //}
  }
}
