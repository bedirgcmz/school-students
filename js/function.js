/**
 * This function gives an alert when the student list is empty.
 * If the list is not empty, it renders.
 * @param {*} pArray
 */
const renderRegistrationList = (pArray) => {
  if (pArray.length == 0) {
    tableDefault.style.display = "none";
    swal("There are no registered students!", "You can register a student with the form");
    alertText.innerHTML = `
    <div class="card shadow-sm">
        <h5 class="card-header text-danger">Registered student not found</h5>
        <div class="card-body">
        <p class="card-text text-info">Please use the form to register a new student.</p>
        </div>
    </div>
    `;
    rowStudent.innerHTML = "";
  } else {
    tableDefault.style.display = "block";
    alertText.innerHTML = "";
    rowStudent.innerHTML = pArray
      .map((student, index) => {
        return `
           <tr> 
            <th scope="row">${index + 1}</th>
            <td>${student.name}</td>
            <td>${student.surname}</td>
            <td>${student.age}</td>
            <td>${student.class}</td>
            <td><i onclick="deleteStudent(${index})" class="far fa-trash-alt text-danger"></i></td>
           <tr/>       
        `;
      })
      .join("");
  }
  classAList = studentRegistrationList.filter((student) => student.class == "Class A");
  classBList = studentRegistrationList.filter((student) => student.class == "Class B");
  classCList = studentRegistrationList.filter((student) => student.class == "Class C");
};

/**
 * This function adds a new student to the list
 * @param {*} event
 */
const addNewStudent = (event) => {
  event.preventDefault();
  let newStudent = {
    class: event.target["class"].value,
    name: event.target["name"].value,
    surname: event.target["surname"].value,
    age: event.target["age"].value,
  };

  studentRegistrationList.push(newStudent);
  renderRegistrationList(studentRegistrationList);
  RenderAllStudentNumber(studentRegistrationList);
  event.target["class"].value = "";
  event.target["name"].value = "";
  event.target["surname"].value = "";
  event.target["age"].value = "";
  swal("Good job!", "Registration Successful!", "success");
  classAList = studentRegistrationList.filter((student) => student.class == "Class A");
  classBList = studentRegistrationList.filter((student) => student.class == "Class B");
  classCList = studentRegistrationList.filter((student) => student.class == "Class C");
};

/**
 * This function renders the total number of students
 * @param {*} pArray
 */
const RenderAllStudentNumber = (pArray) => {
  const plusStudent = pArray.length;
  allStudentNumber.innerHTML = `<b>${plusStudent}<b/>`;
};

/**
 * This function deletes the student from the enrollment list.
 * @param {*} pStudent
 */
const deleteStudent = (pStudent) => {
  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this file!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      swal("Poof! Your file has been deleted!", {
        icon: "success",
      });
      studentRegistrationList.splice(pStudent, 1);
      renderRegistrationList(studentRegistrationList);
      RenderAllStudentNumber(studentRegistrationList);
    } else {
      swal("Your file is safe!");
    }
  });
  classAList = studentRegistrationList.filter((student) => student.class == "Class A");
  classBList = studentRegistrationList.filter((student) => student.class == "Class B");
  classCList = studentRegistrationList.filter((student) => student.class == "Class C");
};

/**
 * These functions filters students by class
 */
const RenderClassAFilter = () => {
  renderRegistrationList(classAList);
  RenderAllStudentNumber(classAList);
};
const RenderClassBFilter = () => {
  renderRegistrationList(classBList);
  RenderAllStudentNumber(classBList);
};
const RenderClassCFilter = () => {
  renderRegistrationList(classCList);
  RenderAllStudentNumber(classCList);
};
const RenderAllClassesFilter = () => {
  renderRegistrationList(studentRegistrationList);
  RenderAllStudentNumber(studentRegistrationList);
};
