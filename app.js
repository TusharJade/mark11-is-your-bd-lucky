var birhdate = document.querySelector("#birthdate");
var luckyNumber = document.querySelector("#luckyno");
var checkbtn = document.querySelector("#checkno");
var output = document.querySelector("#output");

function checkluck(sum, luckyNumber) {
    if (sum % luckyNumber === 0) {
        output.innerHTML = "Your birthday is lucky🥳😍"
    } else {
        output.innerHTML = "Ohh! your birthdate is not lucky😔😌"
    }
}

function calculateNo() {
    var dob = birhdate.value;
    var sum = calculateSum(dob);
    if (sum && dob)
        checkluck(sum, luckyNumber.value)
    else
        output.innerHTML = "Please fill both values😬🥺"


}

function calculateSum(dob) {
    dob = dob.replaceAll("-", "")
    let sum = 0;
    for (let i = 0; i < dob.length; i++) {
        sum = sum + Number(dob.charAt(i));
    }
    return sum;
}

checkbtn.addEventListener("click", calculateNo);