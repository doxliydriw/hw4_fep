let frst = prompt("Please enter more then 2 digit number", "digit");
if (((frst % 10)%2) == 0) {
    alert(frst % 10+ ' is paired number')
} else {
    alert(frst % 10+ ' is not paired number')
}