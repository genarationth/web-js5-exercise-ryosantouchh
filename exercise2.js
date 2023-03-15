const addStar = (x) => {
  let temp = "";
  for (let i = 0; i < x; i++) {
    console.log((temp += "*"));
  }
};
addStar(5);
