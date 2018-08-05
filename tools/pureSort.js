const sort = (arr, compareProperty) => {
  if (arr.length < 2) return arr;
  return arr.reduce((accum, item) => {
    const a = insert(accum, item, compareProperty);
    return a;
  }, []);
};

const insertInto = (arr, item, i) => {
  return [...arr.slice(0, i), item, ...arr.slice(i)];
};

const insert = (arr, item, compareProperty) => {
  const length = arr.length;
  if (length < 1) {
    return [item];
  }

  for (let i = 0; i < length + 1; i++) {
    const prev = arr[i - 1];
    const next = arr[i];

    const largerThanPrevious = prev
      ? compareProperty(item) >= compareProperty(prev)
      : true;
    const smallerThanNext = next
      ? compareProperty(item) <= compareProperty(next)
      : true;

    if (largerThanPrevious && smallerThanNext) {
      return insertInto(arr, item, i);
    }
  }
};

const testArray = [
  -11,
  99,
  99,
  555,
  0,
  123,
  4,
  3,
  6,
  77,
  99,
  1,
  -11,
  34,
  123,
  0,
  8,
  4
];

const compareProperty = a => {
  return a.id;
};
console.log(
  sort(testArray.map((item, i) => ({ id: item, content: i })), compareProperty)
);
