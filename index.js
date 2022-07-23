const nestedObj = {
  john: {
    name: "John Doe",
    age: 30,
    isMarried: false,
  },
  jane: {
    name: "Jane Doe",
    age: 25,
    isMarried: true,
  },
  jill: {
    name: "Jill Doe",
    age: 27,
    isMarried: false,
  },
  bruce: {
    name: "Bruce Doe",
    age: 35,
    isMarried: true,
  },
};

const arr = [19, 30, 50, 90, 85, 47, -10, -64, -98, -12, -99];

// For
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    console.log(arr[i]);
  }
}

// For...in
for (let key in nestedObj) {
  if (nestedObj[key].isMarried) {
    console.log(nestedObj[key].name);
  }
}

// For...of
for (let value of arr) {
  if (value > 0) {
    console.log(value);
  }
}

// While
let y = 0;
while (y < arr.length) {
  if (arr[y] > 0) {
    console.log(arr[y]);
  }
  y++;
}

// Do...while
let z = 0;
do {
  if (arr[z] > 0) {
    console.log(arr[z]);
  }
  z++;
} while (z < arr.length);
