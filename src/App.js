import React, { useState } from "react"; // Import "useState".
import "./App.css";
import Scene from "./components/Scene/Scene.js";
import data from "./Data.js";
import { Button, ButtonStart, WelcomeP, WelcomeTitle } from "./styled.js"; // Import "Button".

function App() {
  const [position, setPosition] = useState(1);
  const [showWelcomeScreen, setShowWelcomeScreen] = useState(true); // Add an "state variable" to display  "Welcome screen".

  function goNext() { // Declare the function "goNext".
    if (position < data.length) { // If the position number is less than the total number of contents...
      setPosition(position + 1); // Add "position" to the following content.
    }
    if (position >= data.length) { // If the position number is > or = the total number of contents, "it means that it is the last content".
      setPosition(1); // So we return it to the first content.
    }
  }

  function goBack() {
    if (position <= data.length) {
      setPosition(position - 1);
    }
    if (position === 1) { // If the position number is = to 1 "it is in the first content"...
      setPosition(4); // So we send it to the last content.
    }
  }

  function handleStartButtonClick() { // Add event handler to hide Welcome screen.
    setShowWelcomeScreen(false);
  }

  return (
    <>
      {showWelcomeScreen === true ?
        ( // Adding condition to show "WeLcome Screen".
          <div>
            <WelcomeTitle>Benvingut a la història interactiva</WelcomeTitle >
            <WelcomeP>Recorre la història del nostre protagonista a través dels dos botons interactius “Anterior” i “Següent”. ¿Preparat? Donçs comença...😀</WelcomeP>
            <ButtonStart onClick={handleStartButtonClick}>Començar</ButtonStart>
          </div>
        ) : (
          <>
            <div>
              <Button onClick={() => goBack()}>Anterior</Button>
              <Button onClick={() => goNext()}>Següent</  Button>
            </div>

            <div>
              {data && data.map(e => (
                <Scene
                  key={e.id}
                  id={e.id} // Create the ID prop from the id of the object place at "data array" to   send it to the "Scene component" =>>> *** It seems that "key" is reserved to React ***.
                  text={e.content}
                  position={position} // Create the POSITION prop with the position info to send it to the "Scene component". *** Required to create the "useState". ***
                />
              ))}
            </div>
          </>
        )}
    </>
  );
}

export default App;

// First, is there is no data, function App doesn't start. If there is data, we iterate "data" array.

// Function App returns the content of data array and save this vaule as a => "text". This "test" will be received by "Scene component".