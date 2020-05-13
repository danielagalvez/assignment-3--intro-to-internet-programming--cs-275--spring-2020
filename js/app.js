let tableData = document.querySelectorAll(`td`); // get all td elements
//loop is used so there is no need to write the event listener for each td element. 
for(let i = 0; i < tableData.length; i++) {
    tableData[i].addEventListener(`click`, (event) => {
        let target = event.target; // pass event to target
        while (target != this) {
            if (target.tagName == `TD`) {
                toggle(target); //toggle function rotate 180 deg and back
                return; 
            }
            target = target.parentNode;
            // makes node which triggered event the parent. 
        }


    } );
}
function toggle(td) {
    if (selectedTd) { // remove the existing rotation if any
        selectedTd.classList.remove(`rotate`);
    }

    selectedTd = td;
    selectedTd.classList.add(`rotate`); // rotate the new data
}

