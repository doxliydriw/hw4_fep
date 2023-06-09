let nmbr = Number(prompt("Please enter three digit number", "digit"));
frst = ((nmbr - (nmbr % 100))/100)
scnd = (((nmbr % 100) - (nmbr % 10))/10)
thrd = (nmbr % 10)
alert (frst+' '+scnd+' '+thrd)
if ((frst + scnd + thrd) % 2 == 0) {
    alert('Summ of digits of '+nmbr+' number is a pair number')
}else {
    alert('Summ of digits of '+nmbr+' number is not a pair number')
}
if (((frst + scnd + thrd) % 5) == 0) {
    alert('Summ of digits of '+nmbr+' is multiple of 5')
}else {
    alert('Summ of digits of '+nmbr+' is NOT multiple of 5')
}
if ((frst * scnd * thrd) > 100) {
    alert('Multiply of digits of '+nmbr+' is more then 100')
}else {
    alert('Multiply of digits of '+nmbr+' is LESS then 100')
}
