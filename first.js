    let frst = prompt("Please enter  first number", "digit");
    let scnd = prompt("Please enter  second number", "digit");
    if ((frst - scnd) > 0) {
        alert(frst +'number is bigger then'+scnd)
    } else if ((frst - scnd) = 0) {
        alert('Numbers are even')
    }else {
        alert(scnd +'number is bigger then'+frst)
    }