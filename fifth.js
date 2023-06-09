let frst = prompt("Please enter two digit number", "digit");
if ((frst % 10) > ((frst - (frst % 10))/10)) {
    alert('Second digit of '+frst+' is bigger then first')
} else if ((frst % 10) == ((frst - (frst % 10))/10)) {
    alert('Digits of '+frst+' are even')
}else {
    alert('First digit of '+frst+' is bigger then second')
}