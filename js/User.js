class User {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
}

class Customer extends User {
  constructor(name, address) {
    super(name, address);
  }
  getNotifiedPrice() {
    // get informed by email when the price of a certain product is updated
    // ask customer to provide email address
  }
}

class Seller extends User {
  constructor(name, address) {
    super(name, address);
  }
  getNotifiedProductSold() {
    // get informed when a certain product has been sold
  }
  getNotifiedStock() {
    // get informed when a certain product has been sold and/or when the stock of a product is empty
  }
  createProduct() {
    // create products
  }
}

export { User, Customer, Seller };
