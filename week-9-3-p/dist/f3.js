"use strict";
const arrayofUser = [
    {
        firstName: "Alex",
        lastName: "Ben",
        age: 15,
        address: "123 Street, City",
        isLegalToVote: false,
    },
    {
        firstName: "Jhon",
        lastName: "Bon",
        age: 21,
        address: "456 Road, Town",
        isLegalToVote: true,
    },
    {
        firstName: "Hen",
        lastName: "Ten",
        age: 19,
        address: "789 Lane, Village",
        isLegalToVote: true,
    },
    {
        firstName: "Chiken",
        lastName: "Little",
        age: 16,
        address: "101 Circle, Farm",
        isLegalToVote: false,
    },
];
function filterUserAbove18(arrayofUser) {
    return arrayofUser.filter((x) => x.age >= 18);
}
const legalUsers = filterUserAbove18(arrayofUser);
console.log(legalUsers);
