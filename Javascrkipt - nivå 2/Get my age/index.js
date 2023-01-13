function calculateFunc() {
    document.getElementById("ageLabel").innerHTML = `Your age is: ${ageCalc()}`;
    document.getElementById("nameLabel").innerHTML = `Your name is: ${document.getElementById("name").value}`;
}

function ageCalc() {
    var currentYear = new Date().getFullYear();
    var userYear = document.getElementById("yearOfBirth").value;
    return (currentYear - userYear);
}