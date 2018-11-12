document.addEventListener("keyup", function(event) {
    // stop any code that may normally run when enter key pressed
    event.preventDefault();
    // if enter key is pressed, run Luhn algorithm
    if (event.keyCode === 13) {
        checkNumber();
    } else {
        // if number in input field is being edited, remove previous number evaluation message
        $("#validation_message").html(null);
    }
});

// function for validating number entered with Luhn algorithm
function checkNumber() {
    var number = document.getElementsByTagName("input")[0].value, sum = 0, digit = 0
    var isIndexEven = false;

    for (var index = number.length - 1; index >= 0; index--) {
        var currentDigit = number.charAt(index), newDigit = parseInt(currentDigit, 10);
        if (isIndexEven) {
            if ((newDigit *= 2) > 9) {
                newDigit -= 9;
            }
        }
        sum += newDigit;
        isIndexEven = !isIndexEven;
    }

    $("#validation_message").html(((sum % 10) == 0) ? "Number is valid" : "Number is invalid");
}

$(".mdc-list-item[href='/demo/luhn-algorithm/']").addClass("mdc-list-item--activated");
$(".mdc-list-item[href='/demo/luhn-algorithm/']").attr("aria-selected", "true");
