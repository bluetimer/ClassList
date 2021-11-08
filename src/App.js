import "./styles.css";
import data from "./classdata.json";

// function VeryBeautifulNumber(num) {
//   return (<span> { num } </span>);
// }

export default function App() {
  // let array = []
  // for (let n = 1; n <= 10; n++) {
  //   array.push(VeryBeautifulNumber(n));
  // }
  // let x = 0;
  // let y = 1;
  let numstudents = data.length;
  let array = [];
  for (let i = 0; i < numstudents; i++) {
    array.push(<Row index={i} />);
  }

  return (
    <div className="App">
      {console.log(data.length)}
      <h1> Code Nation Class List </h1>
      {/* <br/><br/><br/><br/><br/> */}
      <table>
        {array}
        {/* <Row index="0" />
        <Row index="1" />
        <Row index="2" />
        <Row index="3" />
        <Row index="4" />
        <Row index="5" />
        <Row index="6" />
        <Row index="7" />
        <Row index="8" />
        <Row index="9" /> */}
      </table>
      <p> There are {numstudents} of students in this roster.</p>
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
