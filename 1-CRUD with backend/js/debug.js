////////////////////////////////////////////////////////////ignore this file///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */
// selectRow();
// function selectRow() {
//     let arrayOfTd = [];
//     x = document.getElementById("table").rows;
//     for (let i = 1; i < result.length + 1; i++) {
//         x[i].onclick = function () {
//             let cells = x[i].getElementsByClassName('td');
//             let cell = cells[3].textContent;
//             console.log(cell);
//             arrayOfTd.push(cell);
//         }
//     }
//     return arrayOfTd;
// }
// function findRow(classNumber) {
// }
    // let add = document.getElementById('btn1')
    // add.onclick = function () {
    //     clearInfo();
    //     flagOnWhat = true;
    //     setInputReadOnly(false, false);
    //     alert('fill the table data');
    //     //style//
    //     styleInput('2px solid green', '2px solid red');
    //     //button should be clickable//
    //     buttonDisabled(true, true, true, false);
    // }    
    // let edit = document.getElementById('btn2')
    // edit.onclick = function () {
    //     flagOnWhat = false;
    //     alert('change the data');
    //     setInputReadOnly(false, true);
    //     //button should be clickable//
    //     buttonDisabled(true, true, true, false);
    // }
    // let remove = document.getElementById('btn3')
    // remove.onclick = function () {
    //     let uidRemove = Number(document.getElementById('lableUidInput').value);
    //     _delete(uidRemove);
    //     document.getElementById('table').remove();
    //     tableCreation();
    //     clearInfo();
    // }





    // let done = document.getElementById('btn4');
    // done.onclick = function () {
    //     if (!flagOnWhat) {
    //         //update object//
    //         let updatePerson = {
    //             uid: Number(document.getElementById('lableUidInput').value),
    //             firstName: document.getElementById('lableFirstNameInput').value,
    //             lastName: document.getElementById('lableLastNameInput').value,
    //             city: document.getElementById('lableCityInput').value,
    //             personalCode: document.getElementById('lablePostalInput').value,
    //             phoneNumber: document.getElementById('lablePhoneInput').value,
    //             position: document.getElementById('lablePositionInput').value
    //         }
    //         console.log(updatePerson);
    //         console.log(document.getElementById('lableUidInput').value)
    //         if (!isObjectValid(updatePerson)) {
    //             alert('empty field detected');
    //             return;
    //         }
    //         update(updatePerson);
    //         console.log(result);
    //     }
    //     else {
    //         //create object//
    //         let newPerson = {
    //             uid: Number(document.getElementById('lableUidInput').value),
    //             firstName: document.getElementById('lableFirstNameInput').value,
    //             lastName: document.getElementById('lableLastNameInput').value,
    //             city: document.getElementById('lableCityInput').value,
    //             personalCode: document.getElementById('lablePostalInput').value,
    //             phoneNumber: document.getElementById('lablePhoneInput').value,
    //             position: document.getElementById('lablePositionInput').value
    //         }
    //         console.log(newPerson)
    //         if (!isObjectValid(newPerson)) {
    //             alert('empty field detected');
    //             //style//
    //             styleInput('2px solid green', '2px solid red');
    //             return;
    //         }
    //         create(newPerson);
    //     }
    //     // remove table and build again//
    //     document.getElementById('table').remove();
    //     tableCreation();
    //     clearInfo();
    // }// function registerEvents() {
    // let main = document.body;
    // main.setAttribute("id", "main");
    // //style//
    // main.style.display = "flex";
    // main.style.flexDirection = "column";
    // main.style.justifyContent = "center";
    // main.style.alignItems = "center";
    // main.style.boxSizing = "border-box";
    // main.style.fontFamily = ' Arial, Helvetica, sans-serif';
    // //call create Pannel and Table//
    // optionPanel();
    // CreateTableContainer();
// }
// function generalSort(array) {
//     // if (!Array.isArray(array))
//     //     console.log("Invalid input for array")
//     // for (let i = 0; i < array.length; i++) {
//     //     if (typeof (array[i]) !== "object")
//     //         console.log("Invalid input")
//     // }
//     // for (let j = 0; j < array.length; j++) {
//     //     if (!array[j].hasOwnProperty(propName))
//     //         console.log(" object " + (j + 1) + " is not valid")
//     // }
//     return lastArray = array.sort((a, b) => b - a);
// }
// // console.log(generalSort(result, ''));
// function sortTable() {
//     document.getElementById('th1').onclick = function () {
//         generalSort(result, 'uid');
//         document.getElementById('table').remove();
//         tableCreation();
//         clearInfo();
//         choose();
//     }
//     document.getElementById('th2').onclick = function () {
//         function compare(a, b) {
//             const VarA = a.firstName.toUpperCase();
//             const VarB = b.firstName.toUpperCase();
//             let comparison = 0;
//             if (VarA < VarB) {
//                 comparison = 1;
//             } else if (VarA > VarB) {
//                 comparison = -1;
//             }
//             return comparison;
//         }
//         result.sort(compare);
//         document.getElementById('table').remove();
//         tableCreation();
//         clearInfo();
//         choose();
    // let table = document.createElement('table');
    // table.setAttribute('id', 'table')
    // document.getElementById("TableContainer").appendChild(table);
    // //style//
    // table.style.width = '100%'
    // table.style.border = '1px solid #ddd';
    // table.style.borderCollapse = 'collapse';
    // div.style.width = "100%";
    // div.style.height = "auto";
    // div.style.display = 'flex';
        // div.style.border = "1px solid black";
    // div.style.overflow = "hidden";
    // div.style.flexDirection = 'row';
//     }
    // let div = document.createElement("DIV");
    // div.setAttribute("id", "TableContainer");
    // document.getElementById("main").appendChild(div);
    // div.style.width = "100%";
    // div.style.height = "200px";
    // div.style.border = "1px solid black";    // let div = document.createElement("DIV");
    // div.setAttribute("id", "pannel");
    // document.getElementById("main").appendChild(div);
    //style//
    // div.style.marginBottom = '10px'
    // div.style.overflow = "hidden"
    // div.style.display = 'none';
    // div.style.flexDirection = 'row';
    // $('#main').css('justify-content', "center");
    // $('#main').css('align-items', "center");
    // let span = document.createElement("span");
    // span.setAttribute("class", 'spanDetail');
    // document.getElementById(parent).appendChild(span);
    // let textToAdd1 = document.createTextNode(txt);
    // span.appendChild(textToAdd1);
    //input//
    // let input = document.createElement("input");
    // input.setAttribute("id", id);
    // document.getElementById(parent).appendChild(input);
    // input.setAttribute('type', 'text');
    // input.setAttribute('class', 'lable inputOver');
    //style//
    // styleInput(input, 'red');

    // button//
    // let btn = document.createElement("button");
    // btn.setAttribute("id", id);
    // btn.setAttribute("class", 'btn');
    // btn.disabled = disable;
    // let content = document.createTextNode(text);
    // btn.appendChild(content);
    //style//
    // document.getElementById('div5').appendChild(btn);
//     document.getElementById('th3').onclick = function () {
//         function compare(a, b) {
//             const VarA = a.lastName.toUpperCase();
//             const VarB = b.lastName.toUpperCase();
//             let comparison = 0;
//             if (VarA < VarB) {
//                 comparison = 1;
//             } else if (VarA > VarB) {
//                 comparison = -1;
//             }
//             return comparison;
//         }
//         result.sort(compare);
//         document.getElementById('table').remove();
//         tableCreation();
//         clearInfo();
//         choose();
//     }
//     document.getElementById('th4').onclick = function () {
//         generalSort(result, 'postal_Code');
//         document.getElementById('table').remove();
//         tableCreation();
//         clearInfo();
//         choose();

//     }
//     document.getElementById('th5').onclick = function () {
//         generalSort(result, 'Phone_Number');
//         document.getElementById('table').remove();
//         tableCreation();
//         clearInfo();
//         choose();

//     }
//     document.getElementById('th6').onclick = function () {
//         function compare(a, b) {
//             const VarA = a.position.toUpperCase();
//             const VarB = b.position.toUpperCase();
//             let comparison = 0;
//             if (VarA < VarB) {
//                 comparison = 1;
//             } else if (VarA > VarB) {
//                 comparison = -1;
//             }
//             return comparison;
//         }
//         result.sort(compare);
//         document.getElementById('table').remove();
//         tableCreation();
//         clearInfo();
//         choose();

//     }
//     document.getElementById('th7').onclick = function () {
//         function compare(a, b) {
//             const VarA = a.city.toUpperCase();
//             const VarB = b.city.toUpperCase();
//             let comparison = 0;
//             if (VarA < VarB) {
//                 comparison = 1;
//             } else if (VarA > VarB) {
//                 comparison = -1;
//             }
//             return comparison;
//         }
//         result.sort(compare);
//         document.getElementById('table').remove();
//         tableCreation();
//         clearInfo();
//         choose();

//     }
//     // clear();
// }
// sortTable()



