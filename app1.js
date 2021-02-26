let links = document.getElementsByTagName("a");//htmlcollection
links[0].style.color = "#111";
links[3].style.color = "crimson";

for (let i = 0; i < links.length; i++){
    links[i].style.color = "hotpink";
}
/*---setAttribute--*/

let demo = document.getElementById("demo");
demo.setAttribute("class", "btn btn-danger");
/*-----------getAttribute-----*/
console.log(demo.getAttribute("id"));
console.log(document.getElementById( ))
