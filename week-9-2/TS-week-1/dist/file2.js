"use strict";
const user = {
    firstName: "harry",
    lastName: "Alex",
    email: "email@gmail.com",
    age: 21,
};
function isLegalAge(user) {
    if (user.age > 18) {
        return true;
    }
    else {
        return false;
    }
}
