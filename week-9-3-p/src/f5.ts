// Generics enable you to create components that work with any data type while still providing compile-time type safety.

function identity<T>(arg : T) :T{
    return arg;
}

const output1 = identity<string>("Harry");
console.log("OutPut 1" , output1 , output1.toUpperCase());

const output2 =  identity<number>(343);
console.log("outPut 2" ,  output2);


const output3 = identity<boolean>(true);
console.log("outPut 3 " , output3);


function getFirstElement<T>(arr:T[]):T{
    return arr[0]
};

const element1 = getFirstElement<string>(["Jhonathan","Tan","Dire","Mosr"]);
console.log("Element 1" , element1 , element1.toUpperCase());

const element2 = getFirstElement<number>([2,3,4,6,7]);
console.log("Element 2", element2, element2 * Math.random() );


const element3 = getFirstElement(["Jhonathan", "Tan", "Dire", "Mosr"]);
console.log("Element 3", element3, element3.toUpperCase());

const element4 = getFirstElement([2, 3, 4, 6, 7]);
console.log("Element 4", element4, element4 * Math.random());