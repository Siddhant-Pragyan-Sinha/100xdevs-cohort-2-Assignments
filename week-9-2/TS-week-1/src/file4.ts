type user = {
  name: string;
  address: string;
  age: number;
};

//type lets is do Unio

type stringOrNmber = string | number;

function checkWorking(id: stringOrNmber) {
  console.log(id);
}

checkWorking(35353);
checkWorking("njDFNaiorh0awrt");
