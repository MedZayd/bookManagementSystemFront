import React from "react";
import Typography from "@mui/material/Typography";
import menuItems from "../../menu-items";
import NavItem from "./NavItem";

const MenuList = ({ drawerOpen }) => {
	const navItems = menuItems.map((item) => {
		switch (item.type) {
			case "item":
				return <NavItem key={item.id} item={item} drawerOpen={drawerOpen} />;
			default:
				return (
					<Typography key={item.id} variant="h6" color="error" align="center">
						Menu Items Error
					</Typography>
				);
		}
	});

	return <>{navItems}</>;
};

export default MenuList;
