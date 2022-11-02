const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

const flavours = [
  "Chip",
  "Kulfi",
  "Caramel Praline",
  "Chocolate",
  "Burnt Caramel",
  "Pistachio",
  "Rose",
  "Sweet Coconut",
  "Lemon Cookie",
  "Toffeeness",
  "Toasted Almond",
  "Black Raspberry Crunch",
  "Chocolate Brownies",
  "Pistachio Almond",
  "Strawberry",
  "Lavender Honey",
  "Lychee",
  "Peach",
  "Black Walnut",
  "Birthday Cake",
  "Mexican Chocolate",
  "Mocha Almond Fudge",
  "Raspberry",
];

const people = [
  "Beck, Glenn",
  "Becker, Carl",
  "Beckett, Samuel",
  "Beddoes, Mick",
  "Beecher, Henry",
  "Beethoven, Ludwig",
  "Begin, Menachem",
  "Belloc, Hilaire",
  "Bellow, Saul",
  "Benchley, Robert",
  "Benenson, Peter",
  "Ben-Gurion, David",
  "Benjamin, Walter",
  "Benn, Tony",
  "Bennington, Chester",
  "Benson, Leana",
  "Bent, Silas",
  "Bentsen, Lloyd",
  "Berger, Ric",
  "Bergman, Ingmar",
  "Berio, Luciano",
  "Berle, Milton",
  "Berlin, Irving",
  "Berne, Eric",
  "Bernhard, Sandra",
  "Berra, Yogi",
  "Berry, Halle",
  "Berry, Wendell",
  "Bethea, Erin",
  "Bevan, Aneurin",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bierce, Ambrose",
  "Biko, Steve",
  "Billings, Josh",
  "Biondo, Frank",
  "Birrell, Augustine",
  "Black Elk",
  "Blair, Robert",
  "Blair, Tony",
  "Blake, William",
];

// Array.prototype.filter()
console.log(
  "1. Filter the list of inventors for those who were born in the 1500's"
);
const sol1 = inventors.filter(
  (inventor) => inventor.year >= 1500 && inventor.year < 1600
);
console.table(sol1);
console.log(
  "_______________________________________________________________________\n"
);

// Array.prototype.map()
console.log("2. Give us an array of the inventors' first and last names");
const sol2 = inventors.map((inventor) => `${inventor.first} ${inventor.last}`);
console.log(sol2);
console.log(
  "_______________________________________________________________________\n"
);

// Array.prototype.sort() -> Affects the original array it is not a PURE FUNCTION
console.log("3. Sort the inventors by birthdate, oldest to youngest");
const sol3 = inventors.sort((a, b) => (a.year > b.year ? 1 : -1));
console.table(sol3);
console.log(
  "_______________________________________________________________________\n"
);

// Array.prototype.reduce()
console.log("4. How many years did all the inventors live?");
const sol4 = inventors.reduce(
  (total, inventor) => total + (inventor.passed - inventor.year),
  0
);
console.log(sol4);
console.log(
  "_______________________________________________________________________\n"
);

console.log("5. Sort the inventors by years lived");
const sol5 = inventors.sort((a, b) =>
  a.passed - a.year > b.passed - b.year ? -1 : 1
);
console.table(sol5);
console.log(
  "_______________________________________________________________________\n"
);

console.log(
  "6. create a list of Boulevards in Paris that contain 'de' anywhere in the name"
);
console.log("https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris");
// const wrap = document.querySelector('.mw-category'),
//       links = wrap.querySelectorAll('a');   // A nodeList
// To convert a nodeList into array two options:
//   1. linksArray = Array.from(links);
//   2. linksArray = [...links];  Spread operator
// Array.from(links).map(link => link.textContent).filter(content => content.includes('de'));
console.log(
  "_______________________________________________________________________\n"
);

console.log("7. Sort the people alphabetically by last name");
const sol7 = people.sort((a, b) =>
  a.split(",")[0] > b.split(",")[0] ? 1 : -1
);
console.log(sol7);
console.log(
  "_______________________________________________________________________\n"
);

console.log("8. Sum up the instances of each of these");
const data = [
    "car",
    "car",
    "truck",
    "truck",
    "bike",
    "walk",
    "car",
    "van",
    "bike",
    "walk",
    "car",
    "van",
    "car",
    "truck",
  ],
  sol8 = data.reduce((obj, item) => {
    if (!obj[item]) obj[item] = 0;
    obj[item]++;
    return obj;
  }, {});
console.log(sol8);
console.log(
  "_______________________________________________________________________\n"
);
