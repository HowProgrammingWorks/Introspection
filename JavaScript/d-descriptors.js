'use strict';

const object = { a: 1, b: 2, c: 3 };

const array = [1, 2, 3];

const objectDescriptors = Object.getOwnPropertyDescriptors(object);
const arrayDescriptors = Object.getOwnPropertyDescriptors(array);

const objectProperties = Object
  .getOwnPropertyNames(object)
  .map(prop => ({ prop, ...objectDescriptors[prop] }));

const arrayProperties = Object
  .getOwnPropertyNames(array)
  .map(prop => ({ prop, ...arrayDescriptors[prop] }));

console.table(objectProperties);
console.table(arrayProperties);
