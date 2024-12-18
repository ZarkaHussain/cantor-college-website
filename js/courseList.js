(() => {
      console.info("ready");
      const courseListTable = document.getElementById("courseListTable").getElementsByTagName('tbody')[0];
  
      fetch("data/courseList.json")
          .then(response => response.json())
          .then(data => {
              console.dir(data);
              data.forEach((course) => { // Use 'course' instead of 'item'
                  const row = document.createElement("tr");
                  const titleCell = document.createElement("td");
                  const typeCell = document.createElement("td");
                  const summaryCell = document.createElement("td");
                  const awardCell = document.createElement("td");
                  const ucasCodeCell = document.createElement("td");
                  const ucasPointsCell = document.createElement("td");
                  const yearCell = document.createElement("td");
                  const modeCell = document.createElement("td");
                  const lengthCell = document.createElement("td");
  
                  titleCell.textContent = course.CourseTitle;
                  typeCell.textContent = course.CourseType;
                  summaryCell.textContent = course.CourseSummary;
                  awardCell.textContent = course.CourseAwardName;
                  ucasCodeCell.textContent = course.UcasCode;
                  ucasPointsCell.textContent = course.UcasPoints;
                  yearCell.textContent = course.YearOfEntry;
                  modeCell.textContent = course.ModeOfAttendance;
                  lengthCell.textContent = course.StudyLength;
  
                  row.appendChild(titleCell);
                  row.appendChild(typeCell);
                  row.appendChild(summaryCell);
                  row.appendChild(awardCell);
                  row.appendChild(ucasCodeCell);
                  row.appendChild(ucasPointsCell);
                  row.appendChild(yearCell);
                  row.appendChild(modeCell);
                  row.appendChild(lengthCell);
                  courseListTable.appendChild(row);
              });
          })
          .catch(error => {
              console.error("Error fetching data:", error);
          });
  })();