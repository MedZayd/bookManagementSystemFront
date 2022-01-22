import { Grid } from "@mui/material";
import React from "react";
import CButton from "../../ui-components/CButton";
import Modal from "../../ui-components/Modal";

const Confirmation = ({ open, onClose, message, onConfirm }) => (
	<Modal
		isConfirmation
		maxWidth={"xs"}
		height={"auto"}
		open={open}
		handleClose={onClose}
		title={"Alert"}
		content={message}
		actions={
			<>
				<Grid container spacing={2} justifyContent={"center"}>
					<Grid item>
						<CButton type="secondary" onClick={onClose} content={"Cancel"} />
					</Grid>
					<Grid item>
						<CButton type="primary" onClick={onConfirm} content={"Save"} />
					</Grid>
				</Grid>
			</>
		}
	/>
);

export default Confirmation;
