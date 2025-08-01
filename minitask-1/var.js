var x = 10;
let y = 20;
const z = 30;

console.log("Outside block:", x, y, z);

{
  var x = 40; // Re-declared, affects outer scope
  let y = 50; // New block-scoped variable
  const z = 60; // New block-scoped constant

  console.log("Inside block:", x, y, z);
}

console.log("After block:", x, y, z); 
// x is changed, y and z remain as outer declarations