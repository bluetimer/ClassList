import "./styles.css";
import data from "./classdata.json";

export default function App() {
  return (
    <div className="App">
      <table>
        <tr>
          <th>
            <Name text={data[0].FirstName} />
          </th>
          <th>
            <Name text={data[0].LastName} />
          </th>
          <th>
            <Name text={data[0].Pronouns} />
          </th>
        </tr>
        <tr>
          <td>
            <Name text={data[1].FirstName} />
          </td>
          <td>
            <Name text={data[1].LastName} />
          </td>
          <td>
            <Name text={data[1].Pronouns} />
          </td>
        </tr>
        <tr>
          <td>
            <Name text={data[2].FirstName} />
          </td>
          <td>
            <Name text={data[2].LastName} />
          </td>
          <td>
            <Name text={data[2].Pronouns} />
          </td>
        </tr>
      </table>
    </div>
  );
}

function Name(props) {
  return <p> {props.text} </p>;
}
