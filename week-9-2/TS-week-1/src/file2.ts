interface User {
  firstName: string;
  lastName: string;
  email?: string;   //optional 
  age: number;
}

const user = {
  firstName: "harry",
  lastName: "Alex",
  email: "email@gmail.com",
  age: 21,
};
function isLegalAge(user: User) {
  if (user.age > 18) {
    return true;
  } else {
    return false;
  }
}
