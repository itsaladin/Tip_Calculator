//custom function
function calculateTip() {
    //store the data of inputs
    var billAmount = document.getElementById("billAmount").value;
    var serviceQuality = document.getElementById("serviceQuality").value;
    var numPeople = document.getElementById("totalPeople").value;

    //quick validation
    if (billAmount === "" || serviceQuality == 0) {
        window.alert("Please enter some value to run");
        return;
    }

    //check to see if this input is emplty or less than or equal to 1
    if (numPeople === "" || numPeople <= 1) {
        numPeople = 1;
        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";
    }

    //do some math
    var total = (billAmount * serviceQuality) / numPeople;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);

    //display the tip
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;

}

//hide tip amount onload
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//button click function
document.getElementById("calculate").onclick = function () {
    calculateTip();
};
