import "./styles.css";
import data from "./classdata.json";

// function VeryBeautifulNumber(num) {
//   return (<span> { num } </span>);
// }
function displayPerson(first, last) {
  return;
  <div>
    <p> {first}</p>
    <p>{last}</p>
  </div>;
}

export default function App() {
  let students = [
    ["Mikkail", "Allen"],
    ["Justin", "Apupalo"],
    ["Christopher", "Bonifacio"],
    ["Angel", "Campoverde"],
    ["Mahdiya", "Chowdhury"],
    ["Diego", "Cruz"],
    ["Heber	Cruz", "Hernandez"],
    ["Yonatan", "De La Mora"],
    ["Denny", "Fernandez"]
  ];
  //---------------------------------
  // let array = []
  // for (let n = 1; n <= 10; n++) {
  //   array.push(VeryBeautifulNumber(n));
  // }
  // let x = 0;
  // let y = 1;
  //-------------------------------------------------
  //look at line 35 and
  // let numstudents = data.length;
  // let array = [];
  // for (let i = 0; i < numstudents; i++) {
  //   array.push(<Row person={data[i]} />);
  // }

  let array = data.map(function (person) {
    return <Row person={person} />;
  });

  return (
    <div className="App">
      {console.log(students.length)}
      <h1> Code Nation Class List </h1>
      {/* <br/><br/><br/><br/><br/> */}
      <table>{array}</table>
      <displayPerson />
      <p> There are {students.length} of students in this roster.</p>
    </div>
  );
}

function Name(props) {
  return <p> {props.text} </p>;
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
        <Name text={props.person.Pronouns} />
      </td>
      <td>
        <Name text={props.person.School} />
      </td>
      <td>
        <Name text={props.person.GraduationYear} />
      </td>
    </tr>
  );
}
