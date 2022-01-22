import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
import Sidebar from "./SideBar";
import Routes from "../routes";
import Loader from "../features/Loader";
import { IconButton } from "@mui/material";
import { IconMenu2 } from "@tabler/icons";
import { useSelector, useDispatch } from "react-redux";
import { selectDrawer, setDrawer } from "../features/Drawer/drawerSlice";
import Toast from "../features/Toast";

const Layout = () => {
	const dispatch = useDispatch();
	const drawerOpen = useSelector(selectDrawer);

	const handleToggleDrawer = () => dispatch(setDrawer(!drawerOpen));

	return (
		<Box
			sx={{
				display: "flex",
				backgroundColor: "primary.lighter",
				minWidth: "370px",
			}}
		>
			<CssBaseline />
			<AppBar
				position="fixed"
				sx={{
					zIndex: (theme) => theme.zIndex.drawer + 1,
					backgroundColor: "white",
					color: "black",
					boxShadow: "none",
				}}
			>
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="open drawer"
						sx={{ mr: 2 }}
						onClick={handleToggleDrawer}
					>
						<IconMenu2 />
					</IconButton>

					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{
							fontFamily: "Poppins",
						}}
					>
						Book Management System
					</Typography>
				</Toolbar>
			</AppBar>

			<Sidebar drawerOpen={drawerOpen} drawerToggle={handleToggleDrawer} />

			<Box
				component="div"
				sx={{
					flexGrow: 1,
					p: 2,
					minHeight: "100vh",
				}}
			>
				<Toolbar />
				<Box
					component="div"
					sx={{
						p: 3,
						borderRadius: 2,
						backgroundColor: "white",
						fontFamily: "Poppins",
					}}
				>
					<Routes />
				</Box>
			</Box>
			<Loader />
			<Toast />
		</Box>
	);
};

export default Layout;
