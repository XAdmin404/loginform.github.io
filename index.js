function loginForm() {
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#pass").value;
    let message;
    if (email === "Catalin.Macarie2005@gmail.com" && password.length >= 8) {
        document.querySelector("#mess").style.color = "green";
        
        message = "Login succesfully!";
    }
    else if (email !== "Catalin.Macarie2005@gmail.com" && password.length >= 8) {
        message = "Email is incorrect!";
    }
    else if (email === "Catalin.Macarie2005@gmail.com" && password.length <= 8) {
        message = "Password is incorrect!";
    }
    else if (email !== "Catalin.Macarie2005@gmail.com" && password.length <= 8) {
        message = "Email and Password is incorrect!";
    }

    document.querySelector("#mess").innerHTML = message;
}