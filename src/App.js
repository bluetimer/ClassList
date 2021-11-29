import "./styles.css";
import data from "./classdata.json";

export default function App() {
  //not used
  // let students = [
  //   ["Mikkail", "Allen"],
  //   ["Justin", "Apupalo"],
  //   ["Christopher", "Bonifacio"],
  //   ["Angel", "Campoverde"],
  //   ["Mahdiya", "Chowdhury"],
  //   ["Diego", "Cruz"],
  //   ["Heber	Cruz", "Hernandez"],
  //   ["Yonatan", "De La Mora"],
  //   ["Denny", "Fernandez"]
  // ];

  let numstudents = data.length;

  let array = data.map(function (person) {
    return <Row person={person} />;
  });

  return (
    <div className="App">
      {/* {console.log(students.length)} */}
      <h1> Code Nation Class List </h1>
      <table>{array}</table>
      <displayPerson />
      <p> There are {numstudents} of students in this roster.</p>
    </div>
  );
}

function Name(props) {
  return <p> {props.text} </p>;
}

function Pronouns(parameter) {
  //TODO: Try to figure out how this is not working
  //codintion statement might be a bit weird

  //if you use console.log() here
  //to check the value of parameter, I think you'll
  //figure it out. You're very close (Nicki)
  let codesnippet;
  if (parameter === "He/His") {
    codesnippet = <p class="value1"> {parameter.value} </p>;
  } else {
    codesnippet = <p class="value2"> {parameter.value} </p>;
  }
  return codesnippet;
}
function Year(input) {
  return <p> {input.interger}</p>;
}
function Row(props) {
  return (
    <tr>
      <td>
        <Name text={props.person.FirstName} />
      </td>
      <td>
        <Name text={props.person.LastName} />
      </td>
      <td>
        <Pronouns value={props.person.Pronouns} />
      </td>
      <td>
        <Name text={props.person.School} />
      </td>
      <td>
        <Year interger={props.person.GraduationYear} />
      </td>
    </tr>
  );
}

//TODO:
//make a conditional statement when if the pronouns are
// she/hers underline the following text
// he/him bold the following text
