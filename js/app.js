let tableData = document.querySelectorAll(`td`); // get all td elements
function toggle(td) {
    if (selectedTd) { // remove the existing rotation if any
        selectedTd.classList.remove(`rotate`);
    }

    selectedTd = td;
    selectedTd.classList.add(`rotate`); // rotate the new data
}

