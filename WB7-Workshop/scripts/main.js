"strict use"

const selectDropdown = document.getElementById("select-dropdown")
const categoryDropdown = document.getElementById("category-dropdown")

categoryDropdown.style.display = none;

function loadCategoryDropdown() {
    selectedValue = selectDropdown.value

        fetch("http://localhost:8081/api/categories")
            .then((response) => response.json())
            .then((categories) => {
                if (selectedValue === all) {

                }
        });
}




window.onload = () => {
    selectDropdown.onchange = loadCategoryDropdown;
}