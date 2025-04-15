const setLocalStorage2 = (id) => {
  const lsData = getLocalStorage2();
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
    localStorage.setItem("wishlist", strNewData);
    // console.log(strNewData);
  }
};
const removeFromLs2 = (id) => {
  const wishlist = getLocalStorage2();
  const newWishlist = wishlist.filter((c) => c !== id);
  console.log(wishlist);
  console.log(id);
  console.log(newWishlist);
  localStorage.setItem("wishlist", JSON.stringify(newWishlist));
};
const getLocalStorage2 = () => {
  const ls = localStorage.getItem("wishlist");
  //   console.log(ls);
  if (ls) {
    return JSON.parse(ls);
  }
  return [];
};
const getToClient2 = () => {
  const lsData = localStorage.getItem("wishlist");
  if (lsData) {
    return JSON.parse(lsData);
  }
  return [];
};
export { setLocalStorage2, getToClient2, removeFromLs2 };
