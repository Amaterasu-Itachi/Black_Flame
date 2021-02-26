// // console.log(document);
// // console.log(document.all);// html collections. HTML collection are not array values.
// //direct access from DOM
// console.dir(document);
// console.log(document.URL);//DOM property
// document.write("I am Ranjan Raj Nandan");// dom methods
// //document .write comes fromglobal object.


// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.contentType);
// console.log(document.title);
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);



// //indirect 


// console.log(document.h1);


// /*------direct accesss way--*/
// document.write("hello World");
// document.body.style.background = "crimson";
// document.body.style.color = "white";
// document.body.style.padding = "50px";
// document.body.style.border = "20px solid lightgreen";

// /*----indirect access from DOM--*/
// document.getElementById();
// document.getElementsByClassName()
// document.getElementsByTagName();
// document.createAttribute();
// document.createElement();
// document.createComment();
// document.querySelector();
// document.querySelectorAll();

// /*--Get Element By Id---*/


// /*--getElementByClassname---*/
// let links = document.getElementsByClassName("links"); //html collection
// console.log(links);
// console.log(Array.isArray(links));
// links[0].style.background = "red";
// links[1].style.background = "blue";
// links[2].style.background = "hotpink";
// links[3].style.background = "crimson";
// //for (i = 0; i < links.length; i++){
//  //   links[i].style.background = "red";
// // }


Array.from(links).forEach(function (links, i) {
    console.log(links)
    links.className = "ArrayFrom-"
});
