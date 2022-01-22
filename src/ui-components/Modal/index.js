import { DialogContentText } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import React from "react";
import PerfectScrollbar from "react-perfect-scrollbar";

const Modal = ({
	open,
	handleClose,
	actions,
	content,
	title,
	height,
	maxWidth,
	isConfirmation,
}) => {
	return (
		<Dialog
			open={open}
			onClose={handleClose}
			PaperProps={{ elevation: 0, sx: { height: height || 350 } }}
			maxWidth={maxWidth || "md"}
		>
			<DialogTitle sx={{ fontFamily: "Poppins", p: 3 }}>{title}</DialogTitle>
			<DialogContent sx={{ padding: "0 24px" }}>
				{isConfirmation ? (
					<DialogContentText>{content}</DialogContentText>
				) : (
					<PerfectScrollbar>{content}</PerfectScrollbar>
				)}
			</DialogContent>
			<DialogActions sx={{ p: 3 }}>{actions}</DialogActions>
		</Dialog>
	);
};

export default Modal;
