import { ThemeProvider } from "@mui/styles";
import React from "react";
import Layout from "./Layout";
import theme from "./theme";
import DateAdapter from "@mui/lab/AdapterMoment";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

function App() {
	return (
		<LocalizationProvider dateAdapter={DateAdapter}>
			<ThemeProvider theme={theme}>
				<div className="App">
					<Layout />
				</div>
			</ThemeProvider>
		</LocalizationProvider>
	);
}

export default App;
