function nameError(name) {
    if (name === "") {
        alert("Please Enter Your Name");
        return false; /*This means that if the fnction is in the same function then it will return false*/
    }
    return true; /*we have used it to tell the wbsite that the value is corect and return true value*/
}

function numberError(number) {
    if (number === "" || isNaN(number)) {
        alert("Please Enter Valid Number");
        return false; /*This means that if the fnction is in the same function then it will return false*/
    }

    if (number.length < 10 || number.length > 10) {
        alert("Phone Number must not be Less than or greater than 10");
        return false; /*This means that if the fnction is in the same function then it will return false*/
    }

    return true; /*we have used it to tell the wbsite that the value is corect and return true value*/
}

function emailError(email) {
    if (email === "" || !email.includes('@')) {
        alert("Please Enter Valid Email");
        return false; /*This means that if the fnction is in the same function then it will return false*/
    }
    return true; /*we have used it to tell the wbsite that the value is corect and return true value*/
}

function passwordError(password) {
    if (password === "") {
        alert("Please Enter Password");
        return false; /*This means that if the fnction is in the same function then it will return false*/
    }

    else if(password.length < 8 || password.length > 16) {
        alert("Password must not be Less than 8 or greater than 16");
        return false; /*This means that if the fnction is in the same function then it will return false*/
    }

    hasAlphabet = /[A-Za-z]/.test(password);
    hasNumber = /[0-9]/.test(password);

    if (!hasAlphabet || !hasNumber) {
        alert("Password Must have Alphabet and Number");
        return false; /*This means that if the fnction is in the same function then it will return false*/
    }
    return true; /*we have used it to tell the wbsite that the value is corect and return true value*/
}
function submitForm() {
    let name = document.getElementById("UserName").value.trim();
    let number = document.getElementById("Number").value.trim();
    let email = document.getElementById("Email").value.trim();
    let password = document.getElementById("Password").value.trim();
    nameError(name);
    numberError(number);
    emailError(email);
    passwordError(password);

    if (nameError(name)
        && numberError(number)
        && emailError(email)
        && passwordError(password)) {
        alert("Form Submitted");
    }
}
