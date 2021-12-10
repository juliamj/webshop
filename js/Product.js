class Product {
  constructor(name, artNum, price, img) {
    this.name = name;
    this.artNum = artNum;
    this.price = price;
    this.img = img;
    this.quantity = 0;
  }
}

class NormalProduct extends Product {
  constructor(name, artNum, price, img, stock) {
    super(name, artNum, price, img);
    this.stock = stock;
  }
  sendPost() {
    // prepare for sending via post
  }
}

class DigitalProduct extends Product {
  constructor(name, artNum, price, img, email) {
    super(name, artNum, price, img);
    this.email = email;
  }
  sendLink() {
    // if this.email === false => generate download link
  }
  sendMail() {
    // if this.email === true => send via mail
  }
}

export { Product, NormalProduct, DigitalProduct };
