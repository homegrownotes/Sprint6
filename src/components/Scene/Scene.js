import { Border } from "../../styled";
import "../../App.css";

function Scene({ text, id, position }) {
  //Add the img prop.
  return (
    <div>
      <Border active={position === id ? true : false}>{text}</Border>
    </div>
  );
}
export default Scene;
