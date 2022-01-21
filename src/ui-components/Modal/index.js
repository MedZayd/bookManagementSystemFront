import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import React from "react";
import PerfectScrollbar from "react-perfect-scrollbar";

const Modal = ({ open, handleClose, actions, content, title, height }) => {
	return (
		<Dialog
			open={open}
			onClose={handleClose}
			PaperProps={{ elevation: 0, sx: { height: height || 350 } }}
			maxWidth="md"
		>
			<DialogTitle sx={{ fontFamily: "Poppins", p: 3 }}>{title}</DialogTitle>
			<DialogContent sx={{ p: 3 }}>
				<PerfectScrollbar>{content}</PerfectScrollbar>
			</DialogContent>
			<DialogActions sx={{ p: 3 }}>{actions}</DialogActions>
		</Dialog>
	);
};

export default Modal;
