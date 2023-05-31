const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burguerMenuIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const cartMenuicon = document.querySelector(".navbar-shopping-cart");
const cartMenu = document.querySelector("#cart-shop-container");
const cardsContainer = document.querySelector(".cards-container");
const productDetails = document.querySelector("#product-detail");
const btnCloseproductDetails = document.querySelector(".product-detail-close");
navEmail.addEventListener("click", toogleDesktopMenu);
burguerMenuIcon.addEventListener("click", toogleMobileMenu);
cartMenuicon.addEventListener("click", toogleCartMenu);
btnCloseproductDetails.addEventListener("click", btnCloseproductDetail);
function btnCloseproductDetail() {
  productDetails.classList.add("inactive");
}
function toogleDesktopMenu() {
  if (
    !cartMenu.classList.contains("inactive") ||
    !productDetails.classList.contains("inactive")
  ) {
    cartMenu.classList.add("inactive");
    productDetails.classList.add("inactive");
    desktopMenu.classList.remove("inactive");
  } else {
    desktopMenu.classList.toggle("inactive");
  }
}
function toogleMobileMenu() {
  if (
    !cartMenu.classList.contains("inactive") ||
    !productDetails.classList.contains("inactive")
  ) {
    cartMenu.classList.add("inactive");
    productDetails.classList.add("inactive");
    mobileMenu.classList.remove("inactive");
  } else {
    mobileMenu.classList.toggle("inactive");
  }
}
function toogleCartMenu() {
  desktopMenu.classList.add("inactive");
  if (
    !mobileMenu.classList.contains("inactive") ||
    !productDetails.classList.contains("inactive")
  ) {
    mobileMenu.classList.add("inactive");
    productDetails.classList.add("inactive");
    cartMenu.classList.remove("inactive");
  } else {
    cartMenu.classList.toggle("inactive");
  }
}
const productList = [];
productList.push({
  name: "Bike",
  price: 120,
  img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Pc",
  price: 80,
  img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Ram",
  price: 19,
  img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

function renderProducts(productList) {
  for (product of productList) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    const img = document.createElement("img");
    img.src = product.img;
    img.setAttribute("alt", product.name);
    img.addEventListener("click", () =>
      productDetails.classList.remove("inactive")
    );
    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");
    const productInfoContainer = document.createElement("div");
    const price = document.createElement("p");
    price.innerText = `$ ${product.price}`;
    const name = document.createElement("p");
    name.innerText = product.name;
    const figure = document.createElement("figure");
    const figureIcon = document.createElement("img");
    figureIcon.src = "./icons/bt_add_to_cart.svg";
    figure.appendChild(figureIcon);
    productInfoContainer.append(price, name);
    productInfo.append(productInfoContainer, figure);
    productCard.append(img, productInfo);
    cardsContainer.appendChild(productCard);
  }
}
renderProducts(productList);
