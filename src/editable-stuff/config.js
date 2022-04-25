// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Michael",
  middleName: "",
  lastName: "Doria",
  message: "Appassionato di tecnologie innovative.",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/Doria99",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/michael.doria.ytct",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/michael.doria99/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/michael-doria-791b85169/",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/MichaelDoria15/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "Mi presento",
  imageLink: require("../editable-stuff/img.png"),
  imageSize: 375,
  message:
    "Ciao a tutti mi chiamo Michael Doria. Fin da piccolo ho coltivato la passione verso la tecnologia e l'informatica. Ho studiato informatica all'ITIS E.Fermi di Lucca dove mi sono diplomato nel 2018, anno in cui ho iniziato a studiare informatica presso l'università di Pisa dove sto ancora attualmente studiando e dove vorrei proseguire con una laurea magistrale in intelligenza artificiale. Dal 2019 al 2021 ho lavorato presso Hastega come sviluppatore di applicazioni mobile iOS. PS. il curriculum ha assolutamente bisogno di essere aggiornato!",
  resume: "https://drive.google.com/file/d/1Ut0RKhIGHq5wwZucCL9FqzJG907GEJO4/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Progetti recenti",
  gitHubUsername: "Doria99", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    {
      img: require("../editable-stuff/img.png"),
      label: "First slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
    {
      img: require("../editable-stuff/img.png"),
      label: "Second slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills, framework e strumenti",
  hardSkills: [
    { name: "C/C++", value: 100 },
    { name: "Swift", value: 100 },
    { name: "Java", value: 95 },
    { name: "JavaScript", value: 80 },
    { name: "Solidity", value: 70 },
    { name: "Python", value: 75 },
    { name: "SQL", value: 80 },
    { name: "GO", value: 60 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 80 },
    { name: "PHP", value: 75 },
    { name: "Wordpress", value: 80 },
    { name: "Bootstrap", value: 85 },
    { name: "Angular", value: 85 },
    { name: "Node.js", value: 65 },
    { name: "Docker", value: 75 },
    { name: "Heroku", value: 60 },
    { name: "Git", value: 100 },
    { name: "Firebase", value: 60 },
  ],
  softSkills: [
    { name: "Orientato all'obiettivo", value: 80 },
    { name: "Collaborativo", value: 85 },
    { name: "Versatile", value: 85 },
    { name: "Problem Solving", value: 90 },
    { name: "Empatico", value: 95 },
    { name: "Organizzato", value: 100 },
    { name: "Creativo", value: 60 },
    { name: "Perfezionista", value: 100 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Rimaniamo in contatto",
  message:
    "Attualmente mi sto concentrando sugli studi e non sono alla ricerca di posizioni lavorative, in ogni caso vi lascio la mia email per potermi contattare.",
  email: "michael.doria99@gmail.com",
};

const experiences = {
  show: false,
  heading: "Esperienze",
  data: [
    {
      role: 'iOS mobile Developer',// Here Add Company Name
      companylogo: require('../assets/img/hastega.svg'),
      date: 'Gennaio 2019 – 2021',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
