const itemList = document.querySelectorAll("#categories .item");
console.log("Number of categories", itemList.length);

console.log("");

itemList.forEach((item, index) => {
  console.log("Category: ", item.querySelector("h2").textContent);
  console.log("Elements:", item.querySelectorAll("ul li").length);

  if (index !== itemList.length - 1) console.log("");
});
