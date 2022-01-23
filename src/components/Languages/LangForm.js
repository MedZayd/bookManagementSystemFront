import { DialogContentText, Grid } from "@mui/material";
import React from "react";
import { type } from "../../utils/constants";
import CButton from "../../ui-components/CButton";
import FormField from "../../ui-components/FormField";
import Modal from "../../ui-components/Modal";
import { formConfig } from "./config";

const AuthorForm = ({ formik, open, onCloseForm, formType, onDelete }) => {
	const { values, handleSubmit } = formik;

	const handleOnConfirm = () => {
		onDelete(values);
	};

	let maxWidth = "xs";
	let title = "";
	let content = (
		<Grid container spacing={2} sx={{ padding: "10px 0" }}>
			{formConfig.fields.map((field) => (
				<Grid key={field.name} item xs={field.xs}>
					<FormField field={field} form={formik} />
				</Grid>
			))}
		</Grid>
	);
	switch (formType) {
		case type.EDIT:
			title = "Edit language";
			break;
		case type.DELETE:
			maxWidth = "lg";
			title = "Alert";
			content = (
				<DialogContentText sx={{ fontFamily: "Poppins" }}>
					{`Are you sure you want to delete language with ID ${values.id} ?`}
				</DialogContentText>
			);
			break;
		default:
			title = "Create a new language";
	}
	return (
		<Modal
			maxWidth={maxWidth}
			height={"auto"}
			open={open}
			handleClose={onCloseForm}
			title={title}
			content={content}
			actions={
				<>
					<Grid container spacing={2} justifyContent={"center"}>
						<Grid item>
							<CButton
								type={formType === type.DELETE ? "primary" : "danger"}
								onClick={onCloseForm}
								content={"Cancel"}
							/>
						</Grid>
						<Grid item>
							<CButton
								type={formType === type.DELETE ? "danger" : "primary"}
								onClick={
									formType === type.DELETE ? handleOnConfirm : handleSubmit
								}
								content={formType === type.DELETE ? "Confirm" : "Save"}
							/>
						</Grid>
					</Grid>
				</>
			}
		/>
	);
};

export default AuthorForm;
