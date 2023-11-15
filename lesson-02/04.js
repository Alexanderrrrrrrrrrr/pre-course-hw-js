// code
let passport = {
    name: "Petr",
    surname: "Petrov",
};
let newPasspotr = { ...passport };
newPasspotr.name = "Ivan"
console.log(passport.name); 
console.log(newPasspotr.name); 