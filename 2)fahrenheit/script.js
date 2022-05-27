const x = parseInt(prompt("how many degrees is the weather today?"));


function fahrenheit(x) {
    return (x * 1.18) + 32;
}

document.write(fahrenheit(x));