import { ThemeProvider } from "@mui/styles";
import React from "react";
import Layout from "./Layout";
import theme from "./theme";

function App() {
	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<Layout />
			</ThemeProvider>
		</div>
	);
}

export default App;
