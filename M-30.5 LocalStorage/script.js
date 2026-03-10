const addItem = document.querySelector("#add-item");
const container = document.querySelector("#container");

addItem.addEventListener("click", (e) => {
  const product = document.querySelector("#product").value;
  const quantity = document.querySelector("#quantity").value;

  const div = document.createElement("div");
  div.textContent = `${product}: ${quantity}`;
  addToCart(product, quantity);
});

const addToCart = (product, quantity) => {
  if (!localStorage.cart) {
    let cart = {};
    cart[product] = quantity;
    localStorage.setItem("cart", JSON.stringify(cart));
  } else {
    const obj = JSON.parse(localStorage.getItem("cart"));
    if (obj[product]) {
      obj[product] = Number(obj[product]) + Number(quantity);
    } else {
      obj[product] = quantity;
    }
    localStorage.setItem("cart", JSON.stringify(obj));
  }
};

if (localStorage.getItem("cart")) {
  let obj = JSON.parse(localStorage.cart);
  const container = document.querySelector("#container");
  for (let item in obj) {
    const div = document.createElement("div");
    div.textContent = `${item} : ${obj[item]}`;
    container.appendChild(div);
  }
}


