function newUser(name, age, country) {
    var name = name || "oscar";
    var age = age || 3;
    var country = country || "mx";
    console.log(name, age, country);
}



newUser();
newUser("David", 15, "colombia");

function newUser(name, age, country) {
    var name = name || "oscar";
    var age = age || 45;
    var country = country || "mexico";
    console.log (name, age, country);
}

newUser();
newUser()
const a = 3;
const b = -2;

console.log(a > 0 || b > 0);
// Expected output: true
function newUser(name, age, country) {
    var name = name || "Àlexa";
    var age = age || 24;
    var country = country || "COL";
    console.log(name, age, country);
}

newUser();
newUser("Oscar", 34, "MX");

function newAdmin(name = "ocar", age = 35, country = "cl") {
    console.log(name, age, country);
}

newAdmin();
newAdmin("miriam", 26, "mexico");