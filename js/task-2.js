class Storage {
  #items;
  constructor (baseItems) {
    this.#items = baseItems;
  }
  getItems() {
    return this.#items;
  }
addItem(newItem) {
  this.#items.push(newItem);
}
removeItem(itemToRemove) {
const indexItem = this.#items.indexOf(itemToRemove);
if (indexItem !== -1) {
  return this.#items.splice(indexItem, 1);
}
}
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]