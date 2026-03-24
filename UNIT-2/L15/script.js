// function orderFood() {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             console.log("Food Ordered")
//             res()
//         }, 2000)
//     })
// }

// function deliverFood(){
//     return new Promise((res,rej)=>
//     {        setTimeout(() => {
//             console.log("Food Delivered")
//             res()
//         }, 2000)
//     })
// }

// async function main(){
//     await orderFood()
//     await deliverFood()
//     console.log("Enjoy your meal")
// }

// orderFood()

//   orderFood().then(() => {
//     return deliverFood()
//   }).then(() => {
//     return("Enjoy your meal")
//   }).then((message) => {
//     console.log(message)
//   })

// main()

// console.log("first line")
// try {
//     let sample=234
//     console.log(sample)
//     console.log("Line after sample")
//     let age=16
// if (age<18){
//     throw new Error ("You are not eligible to vote")
// }
// } catch (e) {
//     console.log(e)
// }
// console.log("last line")

// async function fetchData() {
//     const response = await fetch('https://dummyjson.com/products');
//     const data = await response.json();
//     data.products.forEach(product => {
//         console.log(product.title)
//     });
// }

// fetchData()

async function sendData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1
        })
    });
    const data = await response.json();
    console.log(data);
}

sendData()

localStorage.setItem("name", "John Doe")
localStorage.setItem("age", "30")

console.log(localStorage.getItem("name"))
console.log(localStorage.getItem("age"))

localStorage.removeItem("age")

console.log(localStorage.getItem("age"))

sessionStorage.setItem("sessionName", "Jane Doe")
console.log(sessionStorage.getItem("sessionName"))
