// Object Methods Explanation
function objectMethods(obj) {
  console.log("Original Object:", obj); 
  
// {
//   key1: "value1",
//   key2: "value2",
//   key3: "value3",
// };

  let keys = Object.keys(obj);
  console.log("After Object.keys():", keys);  //[key1; key2; key3]

  let values = Object.values(obj);
  console.log("After Object.values():", values); //[value1, value2, value3]

  let entries = Object.entries(obj);
  console.log("After Object.entries():", entries); // [ [ 'key1', 'value1' ], [ 'key2', 'value2' ], [ 'key3', 'value3' ] ]

  let hasProp = obj.hasOwnProperty("property");
  console.log("After hasOwnProperty():", hasProp); //

  let newObj = Object.assign({}, obj, { newProperty: "newValue" });
  console.log("After Object.assign():", newObj);
  keys = Object.keys(newObj);
  console.log("After Object.keys():", keys); 


}

// Example Usage for Object Methods
const sampleObject = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

objectMethods(sampleObject);
