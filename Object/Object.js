let address1 = new Address("42 Wallaby Way", "Sydney");
var address2 = new Address("42 Wallaby Way", "Sydney");

let address3 = address1;

//constructor function
function Address(street, city, zip) {
  this.street = street;
  this.city = city;
  this.zip = zip;
}

function areSame(addr1, addr2) {
  return addr1 == addr2;
}

console.log(areSame(address1, address2)); //false because they're not the same object
console.log(areSame(address1, address3)); //true because they're the same object

function areEqual(addr1, addr2) {
  return (
    addr1.street === addr2.street &&
    addr1.city === addr2.city &&
    addr1.zip === addr2.zip
  );
}

console.log(areEqual(address1, address2)); //true because all properties match
