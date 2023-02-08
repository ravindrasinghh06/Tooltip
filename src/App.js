import "./styles.css";
import Tooltip from "@material-ui/core/Tooltip";

export default function App() {
  return (
    <div className="App">
      <h1>Hello Viewers</h1>
      <h2>Tooltip Implementation</h2>
      <Tooltip title="Goodwishes!!!" placement="bottom">
      <div className = "Box">
        <h1 id="press">Press</h1>
        </div>
        </Tooltip>
    </div>
  );
}