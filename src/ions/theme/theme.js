import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	typography: {
		h1: {
			fontFamily: `"Montserrat", sans-serif`,
			variant: "h1",
			color: "white",
			fontWeight: "bold",
			fontStyle: "italic",

		},
		h2: {
			fontFamily: `"Montserrat", sans-serif`,
			fontStyle: "italic",
			color: "white",
			fontSize: "20px",
			textAlign: "center",
		},
		h3: {
			fontFamily: `"Montserrat", sans-serif`,
			color: "white",
			fontSize: "20px",
			textAlign: "center",
		},
	},
	components: {
		MuiPaper: {
			styleOverrides: {
				root: {
					backgroundColor: "#FFFF",
				},
			},
		},
		MuiButton: {
			styleOverrides: {
				root: {
					background: "#F29D35",
					border: 0,
					borderRadius: 10,
					boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
					color: "white",
					fontWeight: 500,
					fontSize: 18,
					height: 45,
					padding: "0 30px",
					paddingColor: "white",
					"&:hover": { backgroundColor: "#00FF00", color: "#000000" },
				},
			},
		},
	},
});

export default theme;
