// DOM Event Handling
console.log(document);
console.log(document.querySelector("button"));
document.querySelector("button").onclick = function () {
  let pancard = document.getElementById("x1").value;
  console.log(pancard);
  let regularExpr = /^[1-9][0-9]{5}$/;
  let answer = regularExpr.test(pancard);
  let msg = answer ? "Valid" : "Invalid";
  document.getElementById("msg").innerHTML = msg;
};
