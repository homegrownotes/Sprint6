import React from "react";
import {Border} from "../../styled";

function Scene(props) {
	return (
		<p><Border>{props.text}</Border></p>
	)		
};

export default Scene;

// Function Scene receives "text" from function App and shows them.