// Case Price
/* 
    Step-1: Add event listener to the case plus button
    Step-2: Get the value inside the case number field (input field)
    Step-3: Convert the number to an integer
    Step-4: Calculate the new case number
    Step-5: Set the value to the case number field
*/

/* document.getElementById("btn-case-plus").addEventListener("click", function() {
    const caseNumberField = document.getElementById("case-number-field");
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);
    const newCaseNumber = previousCaseNumber + 1;
    caseNumberField.value = newCaseNumber;
})

document.getElementById("btn-case-minus").addEventListener("click", function() {
    const caseNumberField = document.getElementById("case-number-field");
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);
    const newCaseNumber = previousCaseNumber - 1;
    caseNumberField.value = newCaseNumber;
})
*/

// Case price another way with function
function updateCaseNumber(isIncrease) {
    const caseNumberField = document.getElementById("case-number-field");
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);
    
    let newCaseNumber;
    if(isIncrease === true) {
        newCaseNumber = previousCaseNumber + 1;
    }
    else {
        newCaseNumber = previousCaseNumber - 1;
    }

    caseNumberField.value = newCaseNumber;
    return newCaseNumber;
}

function updateCaseTotalPrice(newCaseNumber) {
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById("case-total");
    caseTotalElement.innerText = caseTotalPrice;
}



document.getElementById("btn-case-plus").addEventListener("click", function() {
    const newCaseNumber = updateCaseNumber(true);
    updateCaseTotalPrice(newCaseNumber);
    calculateSubTotal()
})

document.getElementById("btn-case-minus").addEventListener("click", function() {
    const newCaseNumber = updateCaseNumber(false);
    updateCaseTotalPrice(newCaseNumber);
    calculateSubTotal()
})
