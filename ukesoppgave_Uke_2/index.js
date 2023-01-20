function showImage(bilde) {
    bilde.src = `images/${bilde.id}.png`;
    document.getElementById('randomImageName').innerHTML = randomImageName();
}

function randomImageName() {
    let pictures = ['chillies', 'pinkOwl', 'profile']
    randomNumber = Math.floor(Math.random(0,2) * 3);
    return pictures[randomNumber]
}