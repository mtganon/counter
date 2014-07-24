var life = {};

life.totals = [20]

window.onload = function() {

    document.getElementById("resetLife").onclick = reset;
    document.getElementById("addOneLife").onclick = addOne;
    document.getElementById("addFiveLife").onclick = addFive;
    document.getElementById("minusOneLife").onclick = minusOne;
    document.getElementById("minusFiveLife").onclick = minusFive;

    function addOne() {
        life.totals[0] = life.totals[0] + 1
        document.getElementById("lifeOne").innerHTML = life.totals[0];
    };

    function addFive() {
        life.totals[0] = life.totals[0] + 5
        document.getElementById("lifeOne").innerHTML = life.totals[0];
    };

    function minusOne() {
        life.totals[0] = life.totals[0] - 1

        if (life.totals[0] <= 0) {
            life.totals[0] = 0
        }

        document.getElementById("lifeOne").innerHTML = life.totals[0];
    };

    function minusFive() {
        life.totals[0] = life.totals[0] - 5

        if (life.totals[0] <= 0) {
            life.totals[0] = 0
        }

        document.getElementById("lifeOne").innerHTML = life.totals[0];
    };
    
    function reset() {
        life.totals = [20]
        document.getElementById("lifeOne").innerHTML = life.totals[0]
    };
}

window.addEventListener('load', function() {
    FastClick.attach(document.body);
}, false);