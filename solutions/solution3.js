iceCreamFlavors.forEach(flavor => {
  var flavorItem = document.createElement("li");
  flavorItem.classList.add("ice-cream-flavor");
  var flavorText = document.createTextNode(flavor);
  flavorItem.appendChild(flavorText);
  document.getElementsByClassName("ice-cream-list")[0].append(flavorItem);
});
