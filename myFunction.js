// create array db master
var dbMaster = [];

/**
 * function save to array dbMaster
 * dev Somchai O00085
 * @param {*} objItemInput 
 * @requires {2} inputFullname, inputAddress
 */
function saveToDbMaster(objItemInput) {
    var sumDbMaster = dbMaster.length; // count data in array
    sumDbMaster++; // add value for put in id
    // add value to dbMaster
    dbMaster.push(
        { id: sumDbMaster, fullname: objItemInput.inputFullname.value, address: objItemInput.inputAddress.value }
    );
    var rowCount = sumDbMaster; // for use in row table
    var findIndex = sumDbMaster - 1; // for use find in array dbMaster
    addDataOnTableBasic(rowCount, findIndex) // for find index in dbMaster

    // reset form input
    resetForm();
}

/**
 * function for update data to dbMaster
 * @param {*} dataId 
 * @param {*} objItemInput 
 */
function editToDbMaster(dataId, objItemInput) {
    // find data in dbMaster and update data
    dbMaster[dataId].fullname = objItemInput.inputFullname.value;
    dbMaster[dataId].address = objItemInput.inputAddress.value;

    // get table
    var table = getTableName("tableBasic");

    // put data on table
    var rowId = dbMaster[dataId].id;
    var dataFullname = dbMaster[dataId].fullname;
    var dataAddress = dbMaster[dataId].address;

    // edit in table
    table.rows[rowId].cells[1].innerHTML = dataFullname;
    table.rows[rowId].cells[2].innerHTML = dataAddress;

    document.getElementById("btnEdit").style.display = "none"; // hide button edit in form
    document.getElementById("btnSubmit").style.display = "block"; // show button submit in form

    // reset form input
    resetForm();
}

/**
 * function for create data in table basic
 * dev Somchai O00085
 * @param {*} objItemInput 
 * @description
 *      - 
 */
function addDataOnTableBasic(rowCount, findIndex) {
    // create row on table
    var table = getTableName("tableBasic");
    // insert new tr
    var row = table.insertRow(rowCount); 
    // insert to cell
    let cellId = row.insertCell(0);
    let cellFullname = row.insertCell(1);
    let cellAddress = row.insertCell(2);
    let cellAction = row.insertCell(3);

    // create button edit on table
    var btnEdit = document.createElement("a");
    btnEdit.href = "#";
    btnEdit.id = "btnEdit" + dbMaster[findIndex].id;
    btnEdit.className = "btnEditOntbl";
    btnEdit.setAttribute("onclick", "editInForm('"+ findIndex +"')");
    cellId.innerHTML = dbMaster[findIndex].id + ".";
    cellFullname.innerHTML = dbMaster[findIndex].fullname;
    cellAddress.innerHTML = dbMaster[findIndex].address;
    cellAction.appendChild(btnEdit);
    cellAction.style.textAlign = "center"; // adding style align
    btnEdit.innerHTML = "Edit";
}

/**
 * function for edit data in form
 * @param {*} dataId
 * @requires {3} dbMaster => id, dbMaster => fullname, dbMaster => address
 */
function editInForm(findIndex) {
    // set isValid is true
    isValid = true;
    console.log("form edit : " + isValid)

    // hide button submit form
    document.getElementById("btnSubmit").style.display = "none";

    // get data from array dbMaster
    var getId = dbMaster[findIndex].id;
    var getFullname = dbMaster[findIndex].fullname;
    var getAddress = dbMaster[findIndex].address;

    // put data to text input
    document.getElementById("txtFullname").value = getFullname;
    document.getElementById("txtAddress").value = getAddress;

    // set data attribute to button edit form
    document.getElementById("btnEdit").setAttribute("value", findIndex); // for link row update

    // show button edit form
    document.getElementById("btnEdit").style.display = "block";
}

/**
 * function prepare data from text input
 * dev Somchai O00085
 */
function prepareDataInput() {
    // get data input
    var objItemInput = {};
    // put data to object
    objItemInput = {
        'inputFullname': document.getElementById("txtFullname"),
        'inputAddress': document.getElementById("txtAddress")
    }
    return objItemInput; // use with file script myValidateForEach.js
}

/**
 * function get table name
 * dev Somchai O00085
 * @param {*} tbName 
 */
function getTableName(tbName) {
    return document.getElementById(tbName);
}

/**
 * function reset form 
 * dev Somchai O00085
 */
function resetForm() {
    document.getElementById("txtFullname").value = "";
    document.getElementById("txtAddress").value = "";
    return isValid = false;
}

/**
 * fucntion set defualt tag span
 * dev Somchai O00085
 * @param {*} tagName
 */
function defaultTagSpan(tagName) {
    document.getElementById("alert" + tagName).innerHTML = "";
    document.getElementById("alert" + tagName).style.color = "";
}