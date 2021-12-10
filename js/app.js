import { NormalProduct, DigitalProduct } from "./Product.js";
import ShoppingCart from "./ShoppingCart.js";
//import { User, Customer, Seller } from "./User.js";
//import Category from "./Category.js";

const productListEl = document.querySelector(".productlist");
const shoppingCartEl = document.querySelector(".cart__productlist");
const totalPriceEl = document.querySelector(".cart__total-price");
const purchaseButtonEl = document.querySelector(".cart__purchase-btn");

const eBook1 = new DigitalProduct(
  "eBook - A",
  "00065",
  [10.99, 8.99],
  [
    "https://cdn.pixabay.com/photo/2018/08/16/15/26/book-3610618_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/08/16/15/26/book-3610618_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/08/16/15/26/book-3610618_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/08/16/15/26/book-3610618_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/08/16/15/26/book-3610618_1280.jpg",
  ],
  true
);
const eBook2 = new DigitalProduct(
  "eBook - B",
  "00085",
  [8.99, 6.99],
  [
    "https://cdn.pixabay.com/photo/2018/08/16/15/26/book-3610618_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/08/16/15/26/book-3610618_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/08/16/15/26/book-3610618_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/08/16/15/26/book-3610618_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/08/16/15/26/book-3610618_1280.jpg",
  ],
  true
);
const movie = new DigitalProduct(
  "Movie A",
  "00026",
  [10.95, 8.95],
  [
    "https://cdn.pixabay.com/photo/2018/08/16/15/26/book-3610618_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/08/16/15/26/book-3610618_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/08/16/15/26/book-3610618_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/08/16/15/26/book-3610618_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/08/16/15/26/book-3610618_1280.jpg",
  ],
  false
);

const book1 = new NormalProduct(
  "Book - C",
  "00041",
  [10.95, 8.95],
  [
    "https://cdn.pixabay.com/photo/2018/01/17/18/43/book-3088775_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/01/17/18/43/book-3088775_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/01/17/18/43/book-3088775_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/01/17/18/43/book-3088775_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/01/17/18/43/book-3088775_1280.jpg",
  ],
  "12"
);
const book2 = new NormalProduct(
  "Book - D",
  "00072",
  [15.99, 13.99],
  [
    "https://cdn.pixabay.com/photo/2018/01/17/18/43/book-3088775_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/01/17/18/43/book-3088775_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/01/17/18/43/book-3088775_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/01/17/18/43/book-3088775_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/01/17/18/43/book-3088775_1280.jpg",
  ],
  "22"
);
const book3 = new NormalProduct(
  "Book - E",
  "00093",
  [20.95, 17.99],
  [
    "https://cdn.pixabay.com/photo/2018/01/17/18/43/book-3088775_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/01/17/18/43/book-3088775_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/01/17/18/43/book-3088775_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/01/17/18/43/book-3088775_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/01/17/18/43/book-3088775_1280.jpg",
  ],
  "26"
);

const shoppingCart = new ShoppingCart();

const productList = [eBook1, book2, book1, eBook2, book3, movie];

const renderProducts = (_) => {
  let markup = "";
  productList.forEach((elem, index) => {
    markup += `
    <li class="product">
      <div class="flex">
        <img class="product__img-main" src="${elem.img[0]}" alt="product-image">
        <div class="flex column">
          <div>
            <div class="product__name">${elem.name}</div>
            <div class="product__art-number">Article Number: ${elem.artNum}</div>
          </div>
          <div class="product__price">Price: ${elem.price[0]} Euro <i class="fas fa-info-circle"></i></div>
        </div>
      </div>
      <div class="flex">
          <img class="product__img" src="${elem.img[1]}" alt="product-image">
          <img class="product__img" src="${elem.img[2]}" alt="product-image">
          <img class="product__img" src="${elem.img[3]}" alt="product-image">
          <img class="product__img" src="${elem.img[4]}" alt="product-image">
      </div>
      <div class="add-btn">Add to Shopping Cart</div>
    </li>
    `;
  });
  productListEl.innerHTML = markup;
};
renderProducts();

const addButtonEl = document.querySelectorAll(".add-btn");
const priceUpdateEl = document.querySelectorAll(".fa-info-circle");

const renderShoppingCart = (_) => {
  let markup = "";
  shoppingCart.products.forEach((elem, index) => {
    markup += `
    <li class="product">
      <div class="flex space-between">
        <div>
          <div class="product__name">${elem.name}</div>
          <div class="product__art-number">Article Number: ${index + 1}</div>
        </div>
        <div>
          <i class="fas fa-trash-alt"></i>
        </div>
      </div>

      <div class="flex space-between">
        <div>Quantity: ${elem.quantity}</div>
        <div class="product__price">Price: ${
          (elem.price[0] * elem.quantity).toFixed(2)
        } Euro</div>
      </div>
    </li>

    `;
  });
  shoppingCartEl.innerHTML = markup;
};

const renderTotalPrice = (_) => {
  totalPriceEl.innerHTML = `
  Total Price: ${shoppingCart.totalPrice.toFixed(2)} Euro
  `;
};

const renderPurchaseButton = (_) => {
  purchaseButtonEl.innerHTML = `Buy now`;
  purchaseButtonEl.classList.add("btn-border");
};

const listeners = (_) => {
  productList.forEach((elem, index) => {
    // add product to shopping cart
    addButtonEl[index].addEventListener("click", function () {
      shoppingCart.addProduct(elem);
      renderShoppingCart();
      renderTotalPrice();
      renderPurchaseButton();

      // remove product from shopping cart
      const removeButtonEl = document.querySelectorAll(".fa-trash-alt");
      shoppingCart.products.forEach((elem, index) => {
        removeButtonEl[index].addEventListener("click", function () {
          shoppingCart.removeProduct(elem);
          renderShoppingCart();
          renderTotalPrice();
        });
      });
    });

    // inform when price is updated
    priceUpdateEl[index].addEventListener("click", function () {
      alert("You will be informed, when the price will be updated!");
    });
  });

  // purchase all products in shopping cart
  purchaseButtonEl.addEventListener("click", function () {
    alert("Thanks for the purchase!");
    shoppingCart.purchase();
    renderShoppingCart();
    // remove purchase button and total price
    purchaseButtonEl.innerHTML = "";
    purchaseButtonEl.classList.remove("btn-border");
    totalPriceEl.innerHTML = "";
  });
};
listeners();
