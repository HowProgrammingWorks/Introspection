'use strict';

const cSymbol = Symbol('c');

const object = {
  a: 1,
  b: 2,
  [cSymbol]: 3,
};

for (const key in object) {
  console.dir({ key, value: object[key] });
}

console.table({
  a: 'a' in object,
  b: 'b' in object,
  cSymbol: cSymbol in object,
  toString: toString in object,
});

console.log();
const array = [1, 2, 3];

for (const index in array) {
  console.dir({ index, value: array[index] });
}
