import { Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import CButton from "../../ui-components/CButton";
import DataTable from "../../ui-components/DataTable";
import Modal from "../../ui-components/Modal";
import DialogContentText from "@mui/material/DialogContentText";
import TextField from "@mui/material/TextField";

const columns = [
	{ field: "id", headerName: "ID", sortable: false, width: 60 },
	{ field: "firstName", headerName: "First name", sortable: false, width: 160 },
	{ field: "lastName", headerName: "Last name", sortable: false, width: 160 },
	{
		field: "age",
		headerName: "Age",
		sortable: false,
		width: 160,
	},
	{
		field: "fullName",
		headerName: "Full name",
		sortable: false,
		width: 160,
		valueGetter: (params) =>
			`${params.getValue(params.id, "firstName") || ""} ${
				params.getValue(params.id, "lastName") || ""
			}`,
	},
];

const rows = [
	{ id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
	{ id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
	{ id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
	{ id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
	{ id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
	{ id: 6, lastName: "Melisandre", firstName: null, age: 150 },
	{ id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
	{ id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
	{ id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const Authors = () => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<Grid container direction="column" spacing={4}>
				<Grid item>
					<Typography variant="h5" sx={{ fontFamily: "Poppins" }}>
						Authors
					</Typography>
				</Grid>
				<Grid item sx={{ display: "flex", justifyContent: "flex-end" }}>
					<CButton
						type="primary"
						content={"Create a new author"}
						onClick={() => setOpen(true)}
					/>
				</Grid>
				<Grid item>
					<DataTable columns={columns} rows={rows} />
				</Grid>
			</Grid>
			<Modal
				open={open}
				handleClose={() => setOpen(false)}
				title="Create a new author"
				content={
					<>
						<DialogContentText sx={{ fontFamily: "Poppins" }}>
							To subscribe to this website, please enter your email address
							here. We will send updates occasionally.
						</DialogContentText>
						<TextField
							autoFocus
							margin="dense"
							id="name"
							label="Email Address"
							type="email"
							fullWidth
							variant="standard"
							sx={{ fontFamily: "Poppins" }}
						/>
					</>
				}
				actions={
					<>
						<Grid container spacing={2} justifyContent={"center"}>
							<Grid item>
								<CButton
									type="secondary"
									onClick={() => setOpen(false)}
									content={"Cancel"}
								/>
							</Grid>
							<Grid item>
								<CButton
									type="primary"
									onClick={() => setOpen(false)}
									content={"Save"}
								/>
							</Grid>
						</Grid>
					</>
				}
			/>
		</>
	);
};

export default Authors;
