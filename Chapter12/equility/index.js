// primitives
Object.is(false, false); // true
Object.is(true, false); // false

Object.is("", ""); // true
Object.is("key", "keys"); // false

Object.is(null, null); // true
Object.is(undefined, undefined); // true
Object.is(null, undefined); // false

Object.is(6, 6); // true
Object.is(6, 4); // false
Object.is(+0, +0); // true
Object.is(-0, -0); // true
Object.is(+0, -0); // false
Object.is(NaN, NaN); // true

Object.is({}, {}); // false

const item = {
  price: 4,
};

Object.is(item, item); // true

Object.is(item, {price: 4}); // false