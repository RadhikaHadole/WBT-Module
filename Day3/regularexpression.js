// DOM Event Handling
console.log(document);
console.log(document.querySelector("button"));
document.querySelector("button").onclick = function () {
    let pancard = document.getElementById("x1").value 
    console.log(pancard)
    let regularExpr =
        /^[a-zA-Z]{5}[0-9][0-9][0-9][\d][a-zA-Z]$/;
    let answer = regularExpr.test(pancard);
    let msg = answer ? "Valid" : "Invalid";
    document.getElementById("msg").innerHTML = msg;
 }



