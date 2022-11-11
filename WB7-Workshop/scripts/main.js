"strict use";

const selectDropdown = document.getElementById("select-dropdown");
const categoryDropdown = document.getElementById("category-dropdown");
const productTableBody = document.querySelector("#product-table tbody");

categoryDropdown.style.display = "none";

function loadCategoryDropdown() {
  selectedValue = selectDropdown.value;

  fetch("http://localhost:8081/api/products")
    .then((response) => response.json())
    .then((products) => {
      products.forEach((product) => {
        if (selectedValue === "all") {
          let row = productTableBody.insertRow(-1);
          let cell1 = row.insertCell(0);
          cell1.innerText = product.productId;

          let cell2 = row.insertCell(1);
          cell2.innerText = product.productName;

          let cell3 = row.insertCell(2);
          cell3.innerText = Number(product.unitPrice).toFixed(2);

          let cell4 = row.insertCell(3);
          const a = document.createElement("a");
          a.innerText = "See Details";
          a.href = `./product-details.html?productid=${product.productId}`;
          a.target = "_blank";
          cell4.appendChild(a);
        }
      });
    });
}



window.onload = () => {
  selectDropdown.onchange = loadCategoryDropdown;
};
