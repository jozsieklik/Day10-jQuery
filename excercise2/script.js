let color = "purple";
let number = 100;
let word = "cool";


// -Change the background color of the first box to purple, if the color is purple

$(".n").css("background", color);

/*
-Change the text of the second
if the number is bigger than 100 to: whoah, that's a big number.
otherwise: just a regular number, please.
*/
if (number > 100) {
    $(".e").text(`whoah, that's a big number.`)
} else {
    $(".e").text(`just a regular number, please.`)
}

// -Change the text to Power of DOM of the third if the word is cool, otherwise change the fourth one

if (word === "cool") {
    $(".s").text(`Power of DOM`)
} else {
    $(".w").text(`Power of DOM`)
}

