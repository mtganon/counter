    var life = {};

    life.totals = [20]

    window.onload = function() {

    function addOne() {
        life.totals[0] = life.totals[0] + 1
        document.getElementById("lifeOne").innerHTML = life.totals[0];
    };

    document.getElementById("addOneLife").onclick = addOne;

    function addFive() {
        life.totals[0] = life.totals[0] + 5
        document.getElementById("lifeOne").innerHTML = life.totals[0];
    };

    document.getElementById("addFiveLife").onclick = addFive;

    function minusOne() {
        life.totals[0] = life.totals[0] - 1

        if (life.totals[0] <= 0) {
            life.totals[0] = 0
        }

        document.getElementById("lifeOne").innerHTML = life.totals[0];
    };

    document.getElementById("minusOneLife").onclick = minusOne;

    function minusFive() {
        life.totals[0] = life.totals[0] - 5

        if (life.totals[0] <= 0) {
            life.totals[0] = 0
        }

        document.getElementById("lifeOne").innerHTML = life.totals[0];
    };

    document.getElementById("minusFiveLife").onclick = minusFive;

    function reset() {
        life.totals = [20]
        document.getElementById("lifeOne").innerHTML = life.totals[0]
    };

    document.getElementById("resetLife").onclick = reset;
}
