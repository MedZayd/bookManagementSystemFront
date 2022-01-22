import React from "react";
import IconButton from "@mui/material/IconButton";

const CIconBtn = ({ icon, onClick, type }) => {
	switch (type) {
		case "primary":
			return (
				<IconButton
					onClick={onClick}
					sx={{
						borderColor: "primary.light",
						color: "primary.light",
						"&:hover": {
							backgroundColor: "primary.light",
							color: "white",
							borderColor: "primary.light",
						},
					}}
				>
					{icon}
				</IconButton>
			);
		case "secondary":
			return (
				<IconButton
					onClick={onClick}
					sx={{
						borderColor: "secondary.light",
						color: "secondary.light",
						"&:hover": {
							backgroundColor: "secondary.light",
							color: "white",
							borderColor: "secondary.light",
						},
					}}
				>
					{icon}
				</IconButton>
			);
		case "danger":
			return (
				<IconButton
					onClick={onClick}
					sx={{
						borderColor: "error.light",
						color: "error.light",
						"&:hover": {
							backgroundColor: "error.light",
							color: "white",
							borderColor: "error.light",
						},
					}}
				>
					{icon}
				</IconButton>
			);
		default:
			return <IconButton onClick={onClick}>{icon}</IconButton>;
	}
};

export default CIconBtn;
