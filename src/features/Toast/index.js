import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { STATUS } from "../../utils/constants";
import { useSelector } from "react-redux";
import { closeToast, selectToast } from "./toastSlice";
import { useDispatch } from "react-redux";

const Alert = React.forwardRef(function Alert(props, ref) {
	return <MuiAlert elevation={0} ref={ref} variant="filled" {...props} />;
});

export default function Toast() {
	const dispatch = useDispatch();
	const { open, type, message } = useSelector(selectToast);

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}
		dispatch(closeToast());
	};

	switch (type) {
		case STATUS.SUCCESS:
			return (
				<Snackbar
					anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
					open={open}
					autoHideDuration={6000}
					onClose={handleClose}
				>
					<Alert
						onClose={handleClose}
						severity="success"
						sx={{ width: "100%" }}
					>
						{message}
					</Alert>
				</Snackbar>
			);
		case STATUS.ERROR:
			return (
				<Snackbar
					anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
					open={open}
					autoHideDuration={6000}
					onClose={handleClose}
				>
					<Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
						{message}
					</Alert>
				</Snackbar>
			);
		default:
			return (
				<Snackbar
					anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
					open={open}
					autoHideDuration={6000}
					onClose={handleClose}
				>
					<Alert onClose={handleClose} severity="info" sx={{ width: "100%" }}>
						{message}
					</Alert>
				</Snackbar>
			);
	}
}
