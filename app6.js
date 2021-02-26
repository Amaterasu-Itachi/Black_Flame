let lists = document.querySelectorAll("li");
let form = document.getElementById("form");
let input = document.getElementById("input");
form.addEventListener("submit", e => {
    e.preventDefault();
    let item = input.value;
    console.log(item);
    lists.forEach(list => {
        list.append(item);
        //list.remove(item);
        list.removeAttributeNode(item);----comes only first element
         //list.replaceChild(item);      
      
    });
});
//these are only add one button from last items 
// let btn = document.createElement("button");
// btn.classList.add("btn", "btn-danger", "btn-sm", "float-right");
// btn.textContent = "Remove";

for (let list of lists) {
    let btn = document.createElement("button");
    btn.classList.add("btn", "btn-danger", "btn-sm", "float-right");
    btn.textContent = "Remove";
    list.appendChild(btn);
    //Dom Events
    list.addEventListener("click", e => {
        //console.log(e.target);
        list.remove();//remove method is used to deleting remove nodelist.
        btn.addEventListener("click", e => {
            console.log(e.target);
            list.remove();
            btn.parentElement.remove();
        })
        
    });

}