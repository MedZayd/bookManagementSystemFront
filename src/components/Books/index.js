import { Grid, Typography } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { type } from "../../utils/constants";
import CButton from "../../ui-components/CButton";
import DataTable from "../../ui-components/DataTable";
import Form from "./Form";
import { formConfig } from "./config";

const Books = ({
	initialValues,
	formOpen,
	formType,
	columns,
	rows,
	formData,
	onCloseForm,
	onOpenForm,
	onSave,
	onDelete,
}) => {
	const formik = useFormik({
		initialValues: initialValues,
		validationSchema: formConfig.validation,
		onSubmit: onSave,
		enableReinitialize: true,
	});

	const onResetForm = () => {
		onCloseForm();
		formik.resetForm();
	};

	return (
		<>
			<Grid container direction="column" spacing={4}>
				<Grid item>
					<Typography variant="h5" sx={{ fontFamily: "Poppins" }}>
						Books
					</Typography>
				</Grid>
				<Grid item>
					<CButton
						type="primary"
						content={"Add book"}
						onClick={() => onOpenForm(type.CREATE)}
					/>
				</Grid>
				<Grid item>
					<DataTable columns={columns} rows={rows} width={"55%"} />
				</Grid>
			</Grid>
			{formOpen && (
				<Form
					formik={formik}
					formData={formData}
					formType={formType}
					open={formOpen}
					onCloseForm={onResetForm}
					type={formType}
					onDelete={onDelete}
				/>
			)}
		</>
	);
};

export default Books;
