import "./styles.css";
import data from "./classdata.json";

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

  let names = students.map(function (array) {
    return array[0] + " " + array[1] + "\n";
  });
  console.log(names);

  let numstudents = data.length;
  let array = [];
  for (let i = 0; i < numstudents; i++) {
    array.push(<Row index={i} />);
  }

  return (
    <div className="App">
      <h1> Code Nation Class List </h1>

      <table>{/* {array} */}</table>
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
        <Name text={data[props.index].FirstName} />
      </td>
      <td>
        <Name text={data[props.index].LastName} />
      </td>
      <td>
        <Name text={data[props.index].Pronouns} />
      </td>
      <td>
        <Name text={data[props.index].School} />
      </td>
      <td>
        <Name text={data[props.index].GraduationYear} />
      </td>
    </tr>
  );
}
