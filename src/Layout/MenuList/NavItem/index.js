import React from "react";

import { useNavigate } from "react-router-dom";

import {
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Typography,
} from "@mui/material";

import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const NavItem = ({ item, drawerOpen, ...listItemProps }) => {
	const navigate = useNavigate();
	const Icon = item.icon;
	const itemIcon = item?.icon ? (
		<Icon stroke={1.5} size="1.3rem" />
	) : (
		<FiberManualRecordIcon
			sx={{
				width: 8,
				height: 8,
			}}
			fontSize={"medium"}
		/>
	);

	return (
		<ListItemButton
			{...listItemProps}
			disabled={item.disabled}
			sx={{
				borderRadius: 2,
				mb: 0.5,
				alignItems: "flex-start",
				backgroundColor: "transparent !important",
				py: 1,
			}}
			selected={false}
			onClick={() => navigate(item.url)}
		>
			<ListItemIcon sx={{ my: "auto", minWidth: !item?.icon ? 18 : 36 }}>
				{itemIcon}
			</ListItemIcon>
			{drawerOpen && (
				<ListItemText
					primary={
						<Typography
							variant={"h5"}
							sx={{ fontFamily: "Poppins", fontSize: "20px" }}
						>
							{item.title}
						</Typography>
					}
				/>
			)}
		</ListItemButton>
	);
};

export default NavItem;
