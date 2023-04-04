/* List of students to render */
const studentRegistrationList = [
  {
    class: "Class A",
    name: "Ahmet",
    surname: "Memis",
    age: 10,
  },
  {
    class: "Class B",
    name: "Ali",
    surname: "Guzel",
    age: 12,
  },
  {
    class: "Class A",
    name: "Ayse",
    surname: "Bulut",
    age: 15,
  },
  {
    class: "Class A",
    name: "Sevgi",
    surname: "Selvi",
    age: 12,
  },
  {
    class: "Class B",
    name: "Ayten",
    surname: "Beyaz",
    age: 13,
  },
  {
    class: "Class C",
    name: "Veysi",
    surname: "Hizli",
    age: 11,
  },
];
/* list of students by class */
let classAList = studentRegistrationList.filter((student) => student.class == "Class A");
let classBList = studentRegistrationList.filter((student) => student.class == "Class B");
let classCList = studentRegistrationList.filter((student) => student.class == "Class C");
