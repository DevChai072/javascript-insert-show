// set defualt isValid
var isValid = true;
// create array db master
var dbMaster = [];

// add event button click
document.getElementById("btnSubmit").addEventListener("click", function() {
    var objItemInput = prepareDataInput();
    console.log("fullname: " + objItemInput.inputFullname.value.length);
    console.log("address: " + objItemInput.inputAddress.value.length);
    validateForm(objItemInput);
    console.log(isValid)
    if (isValid) {
        saveToDbMaster(objItemInput);
    }
}); // for submit form
document.getElementById("btnEdit").addEventListener("click", function() {
    var dataId = this.value; // dbMaster of id
    var objItemInput = prepareDataInput();
    console.log("fullname: " + objItemInput.inputFullname.length);
    console.log("address: " + objItemInput.inputAddress.length);
    validateForm(objItemInput);
    console.log(isValid)
    if (isValid) {
        editToDbMaster(dataId, objItemInput);
    }
}); // for edit form













