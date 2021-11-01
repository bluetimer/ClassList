import "./styles.css";
import data from "./classdata.json";

export default function App() {
  return (
    <div className="App">
      <table>
        {}
        <Row index="0" />
        <Row index="1" />
        <Row index="2" />
      </table>
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
