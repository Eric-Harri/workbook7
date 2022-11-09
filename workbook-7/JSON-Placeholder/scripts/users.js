const table = document.getElementById("user-tbody");
function buildTableBody() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        users.forEach((user) => {
          let row = table.insertRow(-1);
          let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            let cell3 = row.insertCell(2);
            let cell4 = row.insertCell(3);
            let cell5 = row.insertCell(4);
            let cell6 = row.insertCell(5);
            let cell7 = row.insertCell(6);
            let cell8 = row.insertCell(7);

          cell1.innerText = user.id;
          cell2.innerText = user.name;
          cell3.innerText = user.username;
          cell4.innerText = user.email;
          cell5.innerText = user.address.city;
          cell6.innerText = user.phone;
          cell7.innerText = user.website;
          cell8.innerText = user.company.name;
        });
      });

}

window.onload = () => {
    buildTableBody();
      
};