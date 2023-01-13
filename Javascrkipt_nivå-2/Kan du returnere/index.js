function changeBody(data1) {
    data1.innerHTML = toChangeTo();
} 

function toChangeTo() {
    return prompt("What do you want?");
}