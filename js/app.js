/* Calling the function that renders the student list */
renderRegistrationList(studentRegistrationList);
/* Calling the function that renders the total number of students */
RenderAllStudentNumber(studentRegistrationList);
/* Events list*/
myForm.addEventListener("submit", addNewStudent);
classA.addEventListener("click", RenderClassAFilter);
classB.addEventListener("click", RenderClassBFilter);
classC.addEventListener("click", RenderClassCFilter);
AllClasses.addEventListener("click", RenderAllClassesFilter);
