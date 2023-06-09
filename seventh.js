let nmbr = Number(prompt("Please enter three digit number", "digit"));
frst = ((nmbr - (nmbr % 100))/100)
scnd = (((nmbr % 100) - (nmbr % 10))/10)
thrd = (nmbr % 10)
alert (frst+' '+scnd+' '+thrd)
if ((frst == scnd) && (frst == thrd)) {
    alert('All digits of '+nmbr+' are equal')
}else if ((frst == scnd) || (frst == thrd) || (scnd == thrd )) {
    alert('Some digits of '+nmbr+' are equal')   
}else {
    alert('None digits of '+nmbr+' are equal')
}
