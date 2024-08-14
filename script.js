const getSearchTag = document.getElementsByClassName("search")[0];
const orderTag = document.getElementsByClassName("orderList")[0];
getSearchTag.addEventListener("change", (event) => {
  let inputValue = event.target.value;
  const list = document.createElement("li");
  list.classList.add("list-group-item");
  list.append(inputValue);
  orderTag.append(list);
  getSearchTag.value = "";
});
