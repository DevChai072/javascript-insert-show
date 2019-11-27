/**
 * function for validate data require
 * dev Somchai O00085
 * @param {*} objItemInput 
 * @description
 *      - set data to array
 *      - check tag name
 *      - check length value
 *      - if meet the conditions then isValid false
 */
function validateForm(objItemInput) {
    // only tag input
    if (objItemInput.tagNameFullname === "INPUT") {
        if (objItemInput.inputFullname.length < 20 || objItemInput.inputFullname.length > 50) {
            document.getElementById("alertTxtFullname").innerHTML = "ระบุตัวอักษรระหว่าง 20-50 ตัวอักษร";
            document.getElementById("alertTxtFullname").style.color = "red";
            isValid = false;
        } else {
            defaultTagSpan("INPUT"); // set defualt tag span
            isValid = true;
        }
    }
    // only tag textarea
    if (objItemInput.tagNameAddress === "TEXTAREA") {
        if (objItemInput.inputAddress.length < 50 || objItemInput.inputAddress.length > 100) {
            document.getElementById("alertTxtAddress").innerHTML = "ระบุตัวอักษรระหว่าง 50-100 ตัวอักษร";
            document.getElementById("alertTxtAddress").style.color = "red";
            isValid = false;
        } else {
            defaultTagSpan("TEXTAREA"); // set defualt tag span
            isValid = true;
        }
    }
}