let body = document.querySelector('body');
let hue = 0;

function changeColor() {

    //Set the Hue to change per second until it reaches 239 then it loops back to 0
    if (hue >= 360) {
        hue = 0;
    } else {
        hue++
    }

    body.style.backgroundColor = `hsl(${hue}, 100%, 80%)`;
    console.log(hue)

}

setInterval(changeColor, 100);

