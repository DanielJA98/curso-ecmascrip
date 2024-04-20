const user = { username: "Daniel", age: 25, country: "mx"}
//admite el uso de spread con objetos 
const {username, ...values} = user;
console.log(username);
console.log(values);
console.log(user);