interface Array<T> {
  sum(): number;
}

Array.prototype.sum = function () {
  return this.reduce((acc, cur) => acc + cur, 0);
};

const array: number[] = [1, 2, 3];

console.log(array.sum());
