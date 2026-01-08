/*how to value set in local storage*/

// const value = "10";

// localStorage.setItem("marks", value);
// localStorage.setItem("math", value);
// localStorage.setItem("science", value);
// localStorage.setItem("english", value);
// localStorage.setItem("history", value);

/*how to view value from local storage*/

// console.log(localStorage.getItem("marks"));
// console.log(localStorage.getItem("math"));
// console.log(localStorage.getItem("science"));
// console.log(localStorage.getItem("english"));
// console.log(localStorage.getItem("history"));

/*how to crate button by one click show the result*/
// const showresult = () => {
//     console.log("Hello World");
// }

/*when click the button value will be save the local storage*/

// const saveToLocalStorage = () => {
//     // localStorage.setItem("HighScore","96");

//     /*how will be show object in local storage*/

//     const student = {
//         name: "Mejba",
//         age: 22,
//         marks: 95
//     };

//     const convertedToString = JSON.stringify(student);
//     // console.log(convertedToString);
//     localStorage.setItem("Data", convertedToString);

// }

/*how to bacl to object from local storage*/

// const add = localStorage.getItem("Data"); /*data is key name*/
// const backtoObject = JSON.parse(add);
// // console.log(backtoObject);
// console.log(backtoObject.name);
// console.log(backtoObject.age);
// console.log(backtoObject.marks);


/*add to cart button create and show the value*/


const addToCart = () => {
    const productName = document.getElementById("product-name");
    const productPrice = document.getElementById("product-price");
    const name = productName.value;
    const price = productPrice.value;
    console.log(name, price);

    productName.value = "";
    productPrice.value = "";

}

