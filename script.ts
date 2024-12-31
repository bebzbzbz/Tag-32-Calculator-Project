let operationDiv = document.querySelector("#operation-div");
const clearBtn = document.querySelector("#clear-btn");
const solveBtn = document.querySelector("#solve-btn");
const inputBtns = document.querySelectorAll(".input-btn");
const deleteBtn = document.querySelector("#delete-btn");

if(clearBtn && operationDiv && solveBtn && deleteBtn) {
    let operation : string = "";

    inputBtns.forEach((inputBtn) => {
        inputBtn.addEventListener("click", addInput => {
            operation += (addInput.target as HTMLInputElement).value;
            operationDiv.innerHTML = operation;
        })
    });

    solveBtn.addEventListener("click", solve => {
        operation = eval(operation);
        operationDiv.innerHTML = operation;
    });

    deleteBtn.addEventListener("click", deleteLast => {
        operation = operation.substring(0,operation.length-1);
        operationDiv.innerHTML = operation;
    })

    clearBtn.addEventListener("click", clear => {
        operation = "";
        operationDiv.innerHTML = operation;
    });
}