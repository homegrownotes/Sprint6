import './App.css';
import Scene from "./components/Scene/Scene.js";
import data from "./Data.js";

function App() {
  return (
    <div>
      {data && data.map(e => ( 
          <Scene key={e.id} text={e.content}/>
        ))}
    </div>
  );
};
export default App;

// First, is there is no data, function App doesn't start. If there is data, we iterate "data" array.

// Function App returns the content of data array and save this vaule as a => "text". This "test" will be received by "Scene component".