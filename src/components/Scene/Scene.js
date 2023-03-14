import { Border } from "../../styled";

function Scene({ text, id, position }) { // Add the props: id and position.
  return (
    <div>
      <Border active={position === id ? true : false}> 
      {text}</Border> 
    </div> // Render "buttons" also.
  );
}

export default Scene;