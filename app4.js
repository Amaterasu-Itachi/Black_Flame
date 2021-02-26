let username = document.getElementById("username");
let password = document.getElementById("password");

username.addEventListener("keyup", e => {
    let result = e.target.value;
    if (result.length < 7) {
        username.style.background = "red";
        username.style.color = "white";
        username.innerHTML = `<p style="color:red">username should be minimum</p>`;
    } else if (result.length > 7 && result.length < 10) {
        username.style.background = "purple";
        username.style.color = "white";
    }
});