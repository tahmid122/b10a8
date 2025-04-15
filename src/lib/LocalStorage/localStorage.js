const setLocalStorage = (id) => {
  const lsData = getLocalStorage();

  if (lsData) {
    for (let gadId of lsData) {
      if (gadId === id) {
        alert("already added");
        return;
      }
    }

    const newData = [...lsData, id];
    // console.log(newData);
    const strNewData = JSON.stringify(newData);
    localStorage.setItem("cart", strNewData);
    // console.log(strNewData);
  }
};
const removeFromLs = (id) => {
  const cart = getLocalStorage();
  const newCart = cart.filter((c) => c !== id);
  console.log(cart);
  console.log(id);
  console.log(newCart);
  localStorage.setItem("cart", JSON.stringify(newCart));
};
const getLocalStorage = () => {
  const ls = localStorage.getItem("cart");
  //   console.log(ls);
  if (ls) {
    return JSON.parse(ls);
  }
  return [];
};
const getToClient = () => {
  const lsData = localStorage.getItem("cart");
  if (lsData) {
    return JSON.parse(lsData);
  }
  return [];
};
const removeLs = () => {
  localStorage.removeItem("cart");
};
export { setLocalStorage, getToClient, removeLs, removeFromLs };
