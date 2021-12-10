export default class Category {
  constructor(name) {
    this.name = name;
    this.products = [];
    this.subCategories = [];
  }
  addProduct(products) {
    // add product to category(-array)
    this.products.push(products);
  }
  addSubCategory(category) {
    // add subCategory to Category(-array)
    this.subCategories.push(category);
  }
  showProducts() {
    // show all products assigned to this category
    // show products name, article number, prices, pictures
    for (let i = 0; i < this.products.length; i++) {
      //display name etc.
    }
  }
}
