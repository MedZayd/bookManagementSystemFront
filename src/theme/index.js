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
		error: {
			main: "#F44336",
		},
	},
	typography: {
		fontFamily: "Poppins, Roboto",
		fontSize: 12,
	},
	components: {
		MuiTypography: {
			styleOverrides: {
				root: {
					fontFamily: "Poppins, Roboto",
				},
			},
		},
	},
});

export default theme;
