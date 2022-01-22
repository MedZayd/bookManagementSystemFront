import React from "react";
import Button from "@mui/material/Button";

const CButton = ({ type, content, onClick, ...props }) => {
	switch (type) {
		case "primary":
			return (
				<Button
					variant="outlined"
					onClick={onClick}
					{...props}
					sx={{
						minWidth: 120,
						fontFamily: "Poppins",
						borderColor: "primary.light",
						color: "primary.light",
						"&:hover": {
							backgroundColor: "primary.light",
							color: "white",
							borderColor: "primary.light",
						},
					}}
				>
					{content}
				</Button>
			);
		case "secondary":
			return (
				<Button
					variant="outlined"
					onClick={onClick}
					{...props}
					sx={{
						minWidth: 120,
						fontFamily: "Poppins",
						borderColor: "secondary.light",
						color: "secondary.light",
						boxShadow: "none",
						"&:hover": {
							backgroundColor: "secondary.light",
							borderColor: "secondary.light",
							color: "white",
							boxShadow: "none",
						},
					}}
				>
					{content}
				</Button>
			);

		case "danger":
			return (
				<Button
					variant="outlined"
					onClick={onClick}
					{...props}
					sx={{
						minWidth: 120,
						fontFamily: "Poppins",
						borderColor: "error.light",
						color: "error.light",
						boxShadow: "none",
						"&:hover": {
							backgroundColor: "error.light",
							borderColor: "error.light",
							color: "white",
							boxShadow: "none",
						},
					}}
				>
					{content}
				</Button>
			);
		default:
			return (
				<Button
					variant="outlined"
					onClick={onClick}
					{...props}
					sx={{
						fontFamily: "Poppins",
					}}
				>
					{content}
				</Button>
			);
	}
};

export default CButton;
