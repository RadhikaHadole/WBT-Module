function calculate() {
  //   alert("Succesfully Calculated");
  //   confirm("Delete ?");
  //   prompt("Enter Your Name");

  // console.log(document);
  // console.log(document.getElementById("x1"));
  // console.log(document.getElementById("x1").value);

  let amount = document.getElementById("x1").value;
  let roi = document.getElementById("x2").value;
  let duration = document.getElementById("x3").value;
  if (amount == "" || roi == "" || duration == "") {
    document.getElementById("msg").innerText = "All Values are Required";
    document.getElementById("msg").style.color = "red";
  } else {
    console.log(isNaN(amount));

    if (isNaN(amount) || isNaN(roi) || isNaN(duration)) {
      document.getElementById("msg").innerText = "All Values must be a number";
      document.getElementById("msg").style.color = "red";
      }
    else if (amount<=0 || roi<=0 || duration<=0) {
        document.getElementById("msg").innerText =
          "All Values must be a positive number";
        document.getElementById("msg").style.color = "red";
      }
    else {
        console.log(typeof (amount));
        amount = parseInt(amount);
        roi = parseFloat(roi);
        duration = Number(duration);
        let interest = (amount * roi * duration) / 100;
        let finalamount = amount + interest;

        document.getElementById("msg").innerHTML =
          `<b> Interest </b> =${interest} <br>
            <b> Final Amount </b> =${finalamount} <br>`;
        document.getElementById("msg").style.color = "green";
         
      }
  }
}
