// best practice
const addStar = (x) => {
  let temp = "";
  for (let i = 0; i < x; i++) {
    console.log((temp += "*"));
  }
};
addStar(5);

// nested loop
for (let i = 0; i < 5; i++) {
  let temp = "";
  for (let j = 0; j < i + 1; j++) {
    temp += "*";
  }
  console.log(temp);
}
