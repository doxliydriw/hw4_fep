let frst = prompt("Please enter distance in kilometers", "digit");
let scnd = prompt("Please enter distance in feet", "digit");
let scnd_foot = scnd * 0.0003048;
    if ((frst - scnd_foot) > 0) {
        alert(scnd +' feet is less then '+frst+' km')
    } else if ((frst - scnd_foot) == 0) {
        alert('Numbers are even')
    }else {
        alert(frst +' km is less then '+scnd+' feet')
    }