let username = document.getElementById("username");
let password = document.getElementById("password");
let form = document.getElementById("form");
let errorBlock = document.getElementById("errorBlock");
//console.log(form);
//console.log(password);
//console.log(username);
console.log(username.value);


//submit Event(submit form)//
form.addEventListener("submit", e => {
    let errorMessage = [];
    e.preventDefault();
    var name = username.value;
    var pass = password.value;

    //console.log(name);
    //console.log(pass);

    if (name === "" || name === null) {
        //console.log("Usernameis required");
        errorMessage.push("Username is required");
    }//username

    if (pass === "" || pass === null) {
        //console.log("Password is required");
        errorMessage.push("Password is required");
    }//Password
    if (pass.length < 6) {
        errorMessage.push("Password Should be minimum 6 characters");
    }


    //check error
    if (errorMessage.length > 0) {
        //console.log(errorMessage);
        errorBlock.innerHTML = errorMessage.join("<br/>");

    } else {
        alert(`username is ${name}<br/> password is ${pass}`);
        console.log(name);
        console.log(pass);
        username.value = "";
        password.value = "";
    }
    


});



