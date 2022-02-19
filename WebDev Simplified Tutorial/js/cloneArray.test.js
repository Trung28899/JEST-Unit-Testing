const cloneArray = require("./cloneArray");

test("Properly Clone Array", () => {
  const array = [1, 2, 3];
  /*
    toBe() won't pass because the new array has a different address
    search for pass by value and pass by reference to understand more about this

    toEqual() compare only the value of the arrays
  */
  expect(cloneArray(array)).toEqual(array);
  expect(cloneArray(array)).not.toBe(array);
});
