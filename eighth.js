let frst = prompt("Please enter six digit number", "digit");
frst_part = (frst - (frst % 1000)) / 1000;
scnd_part = (frst % 1000)
six_dgt = scnd_part % 10
fifth_dgt = ((scnd_part % 100) - six_dgt)/10
fourth_dgt = (scnd_part - ((fifth_dgt * 10) + six_dgt)) / 100
alert(frst_part + ' ' + scnd_part + ' ' + fourth_dgt + ' ' + fifth_dgt + ' ' + six_dgt)
if (frst_part == ((((six_dgt * 10) + fifth_dgt) * 10) + fourth_dgt)) {
    alert ('Number '+frst+' is a palindrom')
} else {
    alert ('Number '+frst+' is NOT apalindrom')
}