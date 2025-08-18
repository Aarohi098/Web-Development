function randomise(event) {
    event.preventDefault();

    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    let randomColor = "rgb(" + red + "," + green + "," + blue + ")";
    document.body.style.backgroundColor = randomColor;
}