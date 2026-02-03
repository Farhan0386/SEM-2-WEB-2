// console.log("Starting homework...");

// setTimeout(() => {

//                  console.log ("Homework done!");

//                  console.log("Starting dinner...");

//                  setTimeout(() => {

//                                  console.log("Dinner done!");

//                                  console.log("Getting ready to go out...");

//                                   setTimeout(() => {

//                                                       console.log("Going to the playground!");

//                                                     }, 1000); // after dinner

//                                    }, 1500); // dinner time

//                  }, 2000); // homework time


function finishHomework(callback) {
    console.log("Starting homework...");
    setTimeout(() => {
        console.log("Homework done!");
        callback();
    }, 2000);
}
finishHomework()

function eatDinner(callback) {
    console.log("Starting dinner...");
    setTimeout(() => {
        console.log("Dinner done!");
        callback();
    }, 1500);
}
eatDinner();

function goToPlayground() {
    console.log("Getting ready to go out...");
    setTimeout(() => {
        console.log("Going to the playground!");
    }, 1000);
}
goToPlayground();