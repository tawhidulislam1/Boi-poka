const getStoreReadList = () => {
  const storedListStr = localStorage.getItem("mark-as-read");
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};

const addToStoreReadList = (id) => {
  const storedList = getStoreReadList();
  if (storedList.includes(id)) {
    alert("Already Exist", id);
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem("mark-as-read", storedListStr);
  }
};

const getStoreWishlist = () => {
  const storedListStr = localStorage.getItem("wish-list");
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};
const addToStoreWishlist = (id) => {
  const storedList = getStoreWishlist();
  if (storedList.includes(id)) {
    alert("Already Added on WishList", id);
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem('wish-list', storedListStr)
  }
};

export default {addToStoreReadList, addToStoreWishlist};
