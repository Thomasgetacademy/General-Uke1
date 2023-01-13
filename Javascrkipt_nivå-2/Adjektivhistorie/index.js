var element1 = " ___ "
var element2 = " ___ "
var element3 = " ___ "
var element4 = " ___ "

function buttonTest(element, buttonname) {
    if (buttonname === 'field1') {
        element1 = element.innerHTML;
        change(element1, element2, element3, element4);
    } else if (buttonname === 'field2') {
        element2 = element.innerHTML;
        change(element1, element2, element3, element4);
    } else if (buttonname === 'field3') {
        element3 = element.innerHTML;
        change(element1, element2, element3, element4);
    } else if (buttonname === 'field4') {
        element4 = element.innerHTML;
        change(element1, element2, element3, element4);
    }
}

function change(element1, element2, element3, element4) {

    var text1 = document.getElementById('textToChange');
    text1.innerHTML = `Once, there was a ${element1} ${element2} that ${element3} in the ${element4} - and great things happened`;
}