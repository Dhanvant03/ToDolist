const addDataBtn = document.getElementById('add-btn');
const inputFeild = document.getElementById('input-field');
const ulList = document.getElementById('ul');
let addVal = [];

function addData() {

    if (inputFeild.value == "") {
        // alert("Please Enter AValue")
        inputFeild.classList.add("notdata");
        setTimeout(() => {
            inputFeild.classList.remove("notdata");
        }, 800);
    }
    else {
        if (ulList.children[0].className == "not-data") {
            ulList.children[0].remove();
        }

        if (addVal.includes(inputFeild.value)) {
            alert("Data Already Add Your List")
        }
        else {
            let newLiList = document.createElement('li');
            newLiList.innerHTML = `
                <h3 class="val">${inputFeild.value}</h3>
                <div class="btn-area">
                    <button onClick="updateData(this)">Edit</button>
                    <button onclick="removeData(this)">Remove</button>
                </div>
            `
            ulList.append(newLiList);
            addVal.push(inputFeild.value)
        }
        console.log(addVal);
        inputFeild.value = "";
    }
}

function removeData(currentElement) {

    let conf = confirm("Are you sure removing this data");
    if (conf) {
        currentElement.parentElement.parentElement.remove();
        console.log(addVal);
        if (addVal.includes(currentElement.parentElement.previousElementSibling.textContent)) {
            let delValIndex = addVal.indexOf(currentElement.parentElement.previousElementSibling.textContent);
            addVal.splice(delValIndex, 1)
        }
        else {
            console.log("f");
        }
        console.log(addVal);
    }
    else {
        alert("Your Data Is Not Removed")
    }

    if (ulList.children.length <= 0) {
        let h3Elem = document.createElement('h3');
        h3Elem.textContent = "Please Add Data"
        h3Elem.classList.add("not-data");
        ulList.append(h3Elem);
    }
}

function autoDataCheck() {
    if (ulList.children.length <= 0) {
        let h3Elem = document.createElement('h3');
        h3Elem.textContent = "Please Add Data"
        h3Elem.classList.add("not-data");
        ulList.append(h3Elem);
    }
}

function updateData(currentElement) {
    if (currentElement.textContent == "Update") {
        let textContent = currentElement.parentElement.previousElementSibling.value;
        // console.log(textContent);
        let currHeading = document.createElement('h3');
        currHeading.textContent = textContent;

        let updateInput = currentElement.parentElement.previousElementSibling;
        if (textContent == "") {
            // alert("Please Enter Value")
            updateInput.classList.add("notdata");
            setTimeout(() => {
                updateInput.classList.remove("notdata");
            }, 800);
        } else {
            currentElement.textContent = "Edit";
            currentElement.parentElement.parentElement.replaceChild(currHeading, currentElement.parentElement.previousElementSibling)
        }

    } else {
        currentElement.textContent = "Update"
        let textContent = currentElement.parentElement.previousElementSibling.textContent;
        let currInp = document.createElement('input');
        currInp.type = 'text';
        currInp.placeholder = "Enter Data"
        currInp.value = textContent;

        currentElement.parentElement.parentElement.replaceChild(currInp, currentElement.parentElement.previousElementSibling)
    }

    if (currentElement.textContent == 'Update') {
        currentElement.style.background = "green";
        currentElement.style.color = "aliceblue";
    } else {
        currentElement.style.background = "yellow";
        currentElement.style.color = "black";
    }
}

autoDataCheck();

addDataBtn.addEventListener('click', addData)