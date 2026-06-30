let n = BigInt(0);
let t = BigInt(0);
let num = "";
let check = false;

function base_num() {
    checker();
    if (!check) {
        return;
    }
    else{
        n = BigInt(document.getElementById("length").value);
        t = BigInt(document.getElementById("digit").value);

        num = "";

        for (let i = 0; i < n; i++) {
            num += "9";
        }

        let solve = BigInt(BigInt(num) - (BigInt(num) % t));


        if (solve === BigInt(0)) {
            document.getElementById("result").innerHTML = "Impossible";
        }
        else {
            document.getElementById("result").innerHTML = solve;
        }
        check = false;
    }
}

function checker(){
    let length = document.getElementById("length").value;
    let digit = document.getElementById("digit").value;

    let a = true;
    let b = true;
    let c = true;
    let d = true;
    let e = true;
    let f = true;
    if (length > 100){
        alert("The length must not exceed 100");
        a = false;
    }
    if (length< 1){
        alert("The length must not be less than 1");
        b = false;
    }
    if (digit > 10){
        alert("The divisor must not exceed 10");
        c = false;
    }
    if (digit < 2){
        alert("The divisor must not be less than 2");
        d = false;
    }
    if (!/^\d+$/.test(length)){
        alert("The length must contain numbers only");
        e = false;
    }
    if (!/^\d+$/.test(digit)){
        alert("The divisor must contain numbers only");
        f = false;
    }
    if (a === true && b === true && c === true && d === true && e === true && f === true){
        check = true;
    }
}
