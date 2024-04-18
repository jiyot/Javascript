let address = {
  street: "abc",
  city: "Los Angeles",
  zipcode: 90017,
};

function showAddress(address) {
  console.log(`Street: ${address.street}`);
  console.log(`City: ${address.city}`);
  console.log(`Zip Code: ${address.zipcode}`);

  for (let key in address) console.log(key, address[key]);
}
showAddress(address);

let newaddresss = createAddress("a", "b", "c");
console.log(newaddresss);

// factory function

function createAddress(street, city, zip) {
  return {
    street,
    city,
    zip,
  };
}

// constructor functiom

function Address(street, city, zip) {
  this.street = street;
  this.city = city;
  this.zip = zip;
}

let myadddress = new Address("x", "y", "z");
console.log(myadddress);
