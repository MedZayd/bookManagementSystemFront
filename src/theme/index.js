import { createTheme } from "@mui/material";

const theme = createTheme({
	palette: {
		primary: {
			lighter: "#E3F2FD",
			light: "#90CAF9",
			main: "#90CAF9",
		},
		secondary: {
			main: "#B39DDB",
		},
		success: {
			main: "#69F0AE",
		},
	},
	typography: {
		fontFamily: "Poppins, Roboto",
		fontSize: 12,
	},
});

export default theme;
