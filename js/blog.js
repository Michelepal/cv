
function sceltaCategoria(n) {
    let cat1 = document.getElementById("cat1");
    let cat2 = document.getElementById("cat2");
    let cat3 = document.getElementById("cat3");
    let cat4 = document.getElementById("cat4");
    let cat5 = document.getElementById("cat5");

    if (n == 1) {
        cat1.className == "d-block" ? cat1.className = "d-none" : cat1.className = "d-block";
    } else if (n == 2) {
        cat2.className == "d-block" ? cat2.className = "d-none" : cat2.className = "d-block";
    } else if (n == 3) {
        cat3.className == "d-block" ? cat3.className = "d-none" : cat3.className = "d-block";
    } else if (n == 4) {
        cat4.className == "d-block" ? cat4.className = "d-none" : cat4.className = "d-block";
    } else if (n == 5) {
        cat5.className == "d-block" ? cat5.className = "d-none" : cat5.className = "d-block";
    }

}

