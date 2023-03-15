// ---------- part 1
const halfDecrement = (x) => {
  let count = 0;
  while (x > 0) {
    x -= 0.5;
    count++;
  }
  return count;
};

// ---------- part 2
const oddNumber = (x) => {
  let temp = [];
  for (let i = 1; i <= x; i++) {
    if (i % 2 === 1) temp.push(i);
  }
  return temp;
};

// ---------- part 3
const numInBracket = (x) => {
  let count = 1;
  let temp = "";
  while (count <= x) {
    temp = temp + `[${count}]`;
    count++;
  }
  console.log(temp);
};
numInBracket(6);

// ---------- part 4
// optional
const sumNum = (x) => {
  let count = 1;
  let result = 0;
  while (count <= x) {
    result = result + count;
    count++;
  }
  return result;
};
sumNum(100);

// good practice
const sum = (x) => (x * (x + 1)) / 2;
sum(100);
