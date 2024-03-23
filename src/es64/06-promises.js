const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve("heyy!!")
        } else {
            reject("whoopps!")
        }
    })
}

anotherFunction()
    .then(Response => console.log(Response))
    .catch(err => console.log(err));


//ejemplo youtube 
const data = [{
    title: "aprendiendo JavaScript",
    year: "2021",
    isbn: "0120.246.2",
    author: "Carlos"
}, {
    title: "react.js",
    year: "2022",
    isbn: "41",
    author: "carlos"
}, {
    title: "clean js",
    year: "16541",
    isbn: "5416",
    author: "Daniel"
}
]

// function the retard

function getdata() {
    return data;
}
console.log(getdata());