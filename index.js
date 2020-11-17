var ans = 0;
var output = "";
var plusminus = "plus"
function opt() {
    ans = eval(output);
    document.getElementById("result").innerHTML = ans;
}
function input(opr) {
    if (opr == "del") {
        output = output.slice(0, -1);
    }
    else if (opr == "C") {
        output = 0;
    }
    else if (opr == "+/-") {
        if (plusminus == "plus") {
            plusminus = "minus";
            output = '-' + output;
        }
        else {
            plusminus = "plus";
            output = output.substring(1);
        }

    }
    else {
        output += opr;
    }
    if (output == "") {
        output = 0;
    }
    document.getElementById("result").innerHTML = output;
    if (opr == "C") {
        output = "";
    }
}


console.log(ans);