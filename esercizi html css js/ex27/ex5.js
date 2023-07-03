const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

person2={};

for (const value in person1) {
  person2[value] = person1[value];
}

person2["firstName"] = "Simon";


//Così funziona in quanto la copia è effettuata per valore e non per reference come prima(const person2 = person1;)

console.log(person1);
console.log(person2);
