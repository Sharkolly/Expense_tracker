const nameInput = document.querySelector(".name");
const dateInput = document.querySelector(".date");
const amountInput = document.querySelector(".amountt");
const dollar = document.querySelector(".dollar");
const naira = document.querySelector(".naira");
const btn = document.querySelector("button");
const tr = document.querySelector(".secTr");
const table = document.querySelector("table");
const warning = document.querySelector("h2")
const select = document.querySelector("select");

btn.addEventListener("click", function(){

    if(name.input == '' || dateInput.value == '' || amountInput.value == ''){
        warning.style.display = 'block';
    }
    else{
        tr.style.display = 'none'
        const createNew = document.createElement("tr");
        const createName = document.createElement("td");
        const createDate = document.createElement("td");
        const createAmount = document.createElement("td");
        createName.textContent = nameInput.value;
        createDate.textContent = dateInput.value;
        createAmount.textContent = '#' + ((amountInput.value - 1) + 1).toLocaleString();
        createNew.appendChild(createName);
        createNew.appendChild(createDate);
        createNew.appendChild(createAmount);
        table.appendChild(createNew);
        warning.style.display = 'none';
    }

})
