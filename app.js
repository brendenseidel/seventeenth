// routes.legs.value




// would normally come from api
var mapValue = 2790;

var is17thOpen = mapValue < 2000 ? true : false;

console.log(is17thOpen);

var answer = document.getElementById("answer");

console.log(answerDiv);

if (is17thOpen) {
    answer.textContent = "Yes";
} else {
    answer.textContent = "No";
}

