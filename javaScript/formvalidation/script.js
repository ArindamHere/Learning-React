function validation() {
    let name = document.getElementById("name");
    let password = document.getElementById("password");
    let dob = document.getElementById("date").value;
    let email = document.getElementById("email").value;

    let submit = document.getElementById("registrationForm");

    // Reset error messages
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";
    document.getElementById("dateError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";

    let nameRegX = /^[a-zA-Z\s]$/;
    if (!nameRegX.test(name.value)) {
        document.getElementById("nameError").innerHTML = "Invalid name format";
        return false;
    }


    if (password.value.length < 6) {
        document.getElementById("passwordError").innerHTML = "Password must be at least 6 characters";
        return false;
    }

    let currentDate = new Date().toISOString().split("T")[0];
    if (dob > currentDate) {
        document.getElementById("dateError").innerHTML = "Invalid date";
        return false;
    }

    let emailRegEx = /^[a-zA-Z0-9.-_]+@+[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegEx.test(email)) {
        document.getElementById("emailError").innerHTML = "Invalid email format";
        return false;
    }
    return true;


}