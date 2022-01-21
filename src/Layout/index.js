import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
import Sidebar from "./SideBar";
import Routes from "../routes";

const Layout = () => {
	return (
		<Box
			sx={{
				display: "flex",
				backgroundColor: "primary.lighter",
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

			<Sidebar drawerOpen={true} drawerToggle={() => {}} />

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
		</Box>
	);
};

export default Layout;
