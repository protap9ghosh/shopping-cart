// phone
/* document.getElementById("btn-phone-plus").addEventListener("click", function() {
    const phoneNumberField = document.getElementById("phone-number-field");
    const phoneNumberString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberString);

    const newPhoneNumber = previousPhoneNumber + 1;
    phoneNumberField.value = newPhoneNumber;
})

document.getElementById("btn-phone-minus").addEventListener("click", function() {
    const phoneNumberField = document.getElementById("phone-number-field");
    const phoneNumberString = phoneNumberField.value;
    const phoneNumbers = parseInt(phoneNumberString);

    const totalPhoneNumber = phoneNumbers - 1;
    phoneNumberField.value = totalPhoneNumber;
})
*/

function updatePhoneNumber(isIncrease) {
    const phoneNumberField = document.getElementById("phone-number-field");
    const phoneNumberString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberString);

    let newPhoneNumber;

    if (isIncrease) {
        newPhoneNumber = previousPhoneNumber + 1;
    }
    else {
        newPhoneNumber = previousPhoneNumber - 1;
    }
    phoneNumberField.value = newPhoneNumber;

    return newPhoneNumber;
}

function totalPhonePrice(newPhoneNumber) {
    const totalPhonePrice = newPhoneNumber * 1219
    const phoneTotalElement = document.getElementById("phone-price");
    phoneTotalElement.innerText = totalPhonePrice;
}

document.getElementById("btn-phone-plus").addEventListener("click", function() {
    const newPhoneNumber = updatePhoneNumber(true);
    totalPhonePrice(newPhoneNumber)
    calculateSubTotal()
})

document.getElementById("btn-phone-minus").addEventListener("click", function() {
    const newPhoneNumber = updatePhoneNumber(false)
    totalPhonePrice(newPhoneNumber)
    calculateSubTotal()
})