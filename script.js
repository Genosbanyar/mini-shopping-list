const getSearchTag = document.getElementsByClassName("search")[0];
const shoppingTag = document.getElementsByClassName("shoppingList")[0];
let product_id = 1;
getSearchTag.addEventListener("change", (event) => {
  let inputValue = event.target.value;
  const parDiv = document.createElement("div");
  const productContainer = document.createElement("div");
  productContainer.classList.add("productContainer");
  const icon = document.createElement("i");
  icon.addEventListener("click", () => {
    productContainer.remove();
  });
  icon.classList.add("fa", "fa-trash");
  parDiv.addEventListener("click", () => {
    const classExit = parDiv.classList.contains("purchased");
    if (classExit) {
      parDiv.classList.remove("purchased");
    } else {
      parDiv.classList.add("purchased");
    }
    console.log("click");
  });
  const spanTag = document.createElement("span");
  spanTag.id = product_id;
  const productToString = product_id.toString() + ". " + inputValue;
  parDiv.classList.add("product-name");
  spanTag.append(productToString);
  parDiv.append(spanTag);
  productContainer.append(parDiv, icon);
  shoppingTag.append(productContainer);
  getSearchTag.value = "";
  product_id += 1;
});
