function orderFood() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log("Food Ordered")
            res()
        }, 2000)
    })
}

function deliverFood(){
    return new Promise((res,rej)=>
    {        setTimeout(() => {
            console.log("Food Delivered")
            res()
        }, 2000)
    })
}

async function main(){
    await orderFood()
    await deliverFood()
    console.log("Enjoy your meal")
}

orderFood()

  orderFood().then(() => {
    return deliverFood()
  }).then(() => {
    return("Enjoy your meal")
  }).then((message) => {
    console.log(message)
  })

main()

console.log("first line")
try {
    let sample=234
    console.log(sample)
    console.log("Line after sample")
    let age=16
if (age<18){
    throw new Error ("You are not eligible to vote")
}
} catch (e) {
    console.log(e)
}
console.log("last line")

async function fetchData() {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    data.products.forEach(product => {
        console.log(product.title)
    });
}

fetchData()