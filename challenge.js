/**
* function addDataRowsTableChallenge 
* Dev : Somchai O00085
*
**/
function addDataRowsTableChallenge(item, index) {
    const tableCha = document.getElementById("data-show-challenge");
    let rowCount = tableCha.rows.length;
    let row = tableCha.insertRow(rowCount);
    // create btn edit in cell action
    // let btnEdit = document.createElement("button");
    let btnEdit = document.createElement("a");
    btnEdit.href = "#";
    btnEdit.id = "btn-edit-challenge-" + rowCount;
    btnEdit.className = "btn-edit-challenge";
    btnEdit.setAttribute("data", "data-" + rowCount);
    btnEdit.setAttribute("onclick", "editFormInTable('"+ rowCount +"')");
    btnEdit.innerHTML = "Edit";
    let cellId = row.insertCell(0);
    let cellFullname = row.insertCell(1);
    let cellAddress = row.insertCell(2);
    let cellAction = row.insertCell(3);
    // adding style align
    cellAction.style.textAlign = "center";
    // appendChild
    cellAction.appendChild(btnEdit);
    cellId.innerHTML = rowCount++;
    cellFullname.innerHTML = item.fullname;
    cellAddress.innerHTML = item.address;
}
/**
* function editFormInTable 
* Dev : Somchai O00085
*
**/
function editFormInTable(id) {
    const table = document.getElementById("data-show-challenge");
    // put in valiable
    getId = table.rows[id].cells[0].innerHTML;
    getFullname = table.rows[id].cells[1].innerHTML;
    getAddress = table.rows[id].cells[2].innerHTML;
    // create element
    let inputEditFullname = document.createElement("input");
    inputEditFullname.name = "input-fullname-challenge";
    inputEditFullname.className = "form-challenge";
    let inputEditAddress = document.createElement("textarea");
    inputEditAddress.name = "input-address-challenge";
    inputEditAddress.className = "form-challenge";
    inputEditAddress.rows = "5";
    // remove text in cell
    table.rows[id].cells[1].innerHTML = "";
    table.rows[id].cells[2].innerHTML = "";
    // appendChild
    table.rows[id].cells[1].appendChild(inputEditFullname);
    table.rows[id].cells[2].appendChild(inputEditAddress);
    // put value to textbox
    inputEditFullname.value = getFullname;
    inputEditAddress.value = getAddress;
    // hide btn edit
    document.getElementById("btn-edit-challenge-" + id).style.display = "none";
    // create btn save in cell action
    let btnSave = document.createElement("button");
    btnSave.className = "btn-save-challenge";
    btnSave.id = "btn-save-challenge-" + id;
    btnSave.setAttribute("data", "data-" + id);
    btnSave.setAttribute("onclick", "saveFormInTable('"+ id +"')");
    btnSave.innerHTML = "Save"
    table.rows[id].cells[3].appendChild(btnSave);
    // create btn cancel in cell action
    let btnCancel = document.createElement("button");
    btnCancel.className = "btn-cancel-challenge";
    btnCancel.id = "btn-cancel-challenge-" + id;
    btnCancel.setAttribute("data", "data-" + id);
    btnCancel.setAttribute("onclick", "cancelFormInTable('"+ id +"', '"+ getFullname +"', '"+ getAddress +"')");
    btnCancel.innerHTML = "Cancel";
    table.rows[id].cells[3].appendChild(btnCancel);
}
/**
* function saveFormInTable 
* Dev : Somchai O00085
*
**/
function saveFormInTable(id) {
    let arrElementForm = {
        fullname: document.getElementsByName("input-fullname-challenge"),
        address: document.getElementsByName("input-address-challenge")
    };
    const inputForm = Object.keys(arrElementForm).length; // sum input form
    let counter = 0;
    // validate input before save
    Object.keys(arrElementForm).forEach (function (item) {
        if (arrElementForm[item]) {
            let strTextForm = arrElementForm[item][0].value;
            let formName = arrElementForm[item][0].name;
            let tagElement = arrElementForm[item][0].tagName;
            let strLength = strTextForm.length;
            // check length string is empty
            if (strLength <= 0) { // if empty
                // alert wrong function
                alert("กรุณากรอกข้อมูล");
            } else { // or have
                // check type element in function
                switch(tagElement) {
                    case "INPUT":
                            if (strLength < 20) {
                                alert("ระบุตัวอักษรระหว่าง 20-50 ตัวอักษร");
                            } else if (strLength > 50) {
                                alert("ระบุตัวอักษรระหว่าง 20-50 ตัวอักษร");
                            } else {
                                counter++;
                            }
                        break;
                    case "TEXTAREA":
                            if (strLength < 50) {
                                alert("ระบุตัวอักษรระหว่าง 50-100 ตัวอักษร");
                            } else if (strLength > 100) {
                                alert("ระบุตัวอักษรระหว่าง 50-100 ตัวอักษร");
                            } else {
                                counter++;
                            }
                        break;
                }
            }
        }
    });
    if (counter >= inputForm) {
        const table = document.getElementById("data-show-challenge");
        let fullname = document.getElementsByName("input-fullname-challenge")[0].value;
        let address = document.getElementsByName("input-address-challenge")[0].value;
        // save data to cell
        table.rows[id].cells[1].innerHTML = fullname;
        table.rows[id].cells[2].innerHTML = address;
        // change display button in cell
        document.getElementById("btn-edit-challenge-" + id).style.display = "";
        // remove button save and cancel
        const btnSave = document.getElementById("btn-save-challenge-" + id);
        const btnCancel = document.getElementById("btn-cancel-challenge-" + id);
        btnSave.parentNode.removeChild(btnSave);
        btnCancel.parentNode.removeChild(btnCancel);
    }
}
/**
* function cancelFormInTable 
* Dev : Somchai O00085
*
**/
function cancelFormInTable(id, getFullname, getAddress) {
    const table = document.getElementById("data-show-challenge");
    // remove text in cell
    table.rows[id].cells[0].innerHTML = "";
    table.rows[id].cells[1].innerHTML = "";
    table.rows[id].cells[2].innerHTML = "";
    // save data to cell
    console.log(getFullname)
    console.log(getAddress)
    table.rows[id].cells[0].innerHTML = id;
    table.rows[id].cells[1].innerHTML = getFullname;
    table.rows[id].cells[2].innerHTML = getAddress;
    // change display button in cell
    document.getElementById("btn-edit-challenge-" + id).style.display = "";
    // remove button save and cancel
    const btnSave = document.getElementById("btn-save-challenge-" + id);
    const btnCancel = document.getElementById("btn-cancel-challenge-" + id);
    btnSave.parentNode.removeChild(btnSave);
    btnCancel.parentNode.removeChild(btnCancel);
}