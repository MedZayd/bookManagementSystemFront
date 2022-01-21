import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import PerfectScrollbar from "react-perfect-scrollbar";

const DataTable = ({ columns, rows, ...props }) => {
	return (
		<PerfectScrollbar
			component="div"
			style={{
				height: 440,
				paddingBottom: "16px",
			}}
		>
			<DataGrid
				columns={columns}
				rows={rows}
				{...props}
				headerHeight={50}
				rowHeight={50}
				pagination
				pageSize={10}
				checkboxSelection
				sx={{
					fontFamily: "Poppins",
				}}
				disableColumnMenu
				disableSelectionOnClick
				disableVirtualization
				onPageSizeChange={(props) => console.log(props)}
				onSelectionModelChange={(props) => console.log(props)}
			/>
		</PerfectScrollbar>
	);
};

export default DataTable;
