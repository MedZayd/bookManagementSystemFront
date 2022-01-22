import React, { useEffect } from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useSelector } from "react-redux";
import { selectLoading } from "./loaderSlice";

export default function Loader() {
	const [open, setOpen] = React.useState(false);

	const loading = useSelector(selectLoading);

	useEffect(() => setOpen(loading), [loading]);

	return (
		<Backdrop
			sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
			open={open}
		>
			<CircularProgress color="inherit" />
		</Backdrop>
	);
}
