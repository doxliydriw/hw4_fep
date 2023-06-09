let frst = prompt("Please enter first number", "digit");
let scnd = prompt("Please enter second number", "digit");
if ((frst % scnd) == 0) {
    alert(scnd +' is a divider for '+frst)
} else if ((scnd % frst) == 0) {
    alert(frst +' is a divider for '+scnd)
}else {
    alert('Numbers are not deviders for each other')
}