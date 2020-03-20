/**
 * function for validate form require
 * dev Somchai O00085
 * @param {*} objItemInput 
 */
function validateForm(objItemInput) {

    var isValid = true;

    document.getElementById("spnAlertTxtFullname").innerHTML = "";
    document.getElementById("spnAlertTxtAddress").innerHTML = "";
    if (objItemInput.inputFullname.value.length < 2 || objItemInput.inputFullname.value.length > 50 ){
        document.getElementById("spnAlertTxtFullname").innerHTML = "ระบุตัวอักษรระหว่าง 2-50 ตัวอักษร";
        document.getElementById("spnAlertTxtFullname").style.color = "red";
        isValid = false;
    }
    
    if (objItemInput.inputAddress.value.length < 5 || objItemInput.inputAddress.value.length > 100){
        document.getElementById("spnAlertTxtAddress").innerHTML = "ระบุตัวอักษรระหว่าง 5-100 ตัวอักษร";
        document.getElementById("spnAlertTxtAddress").style.color = "red";
        isValid = false;
    }

    return isValid;
}