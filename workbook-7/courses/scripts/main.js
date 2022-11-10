"strict uses";

const courseTableBody = document.querySelector("#course-table tbody");

function loadCourseTableBody() {
  fetch("http://localhost:8081/api/courses")
    .then((response) => response.json())
    .then((courses) => {
      console.log(courses);
        courses.forEach((course) => {
            let row = courseTableBody.insertRow(-1);
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            let cell3 = row.insertCell(2);
            cell2.innerText = course.courseNum;
            cell3.innerText = course.dept;
            const anchor = document.createElement("a")
            anchor.href = `./details.html?courseid=${course.id}`;
            anchor.innerText = course.courseName
            cell1.appendChild(anchor);
        })
          
    });
}

window.onload = () => {
    loadCourseTableBody();
    
}

