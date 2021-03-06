import { Grid, Typography } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { type } from "../../utils/constants";
import CButton from "../../ui-components/CButton";
import DataTable from "../../ui-components/DataTable";
import AuthorForm from "./AuthorForm";
import { formConfig } from "./config";

const Authors = ({
	initialValues,
	formOpen,
	formType,
	columns,
	rows,
	onCloseForm,
	onOpenForm,
	onSaveAuthor,
	onDeleteAuthor,
}) => {
	const formik = useFormik({
		initialValues: initialValues,
		validationSchema: formConfig.validation,
		onSubmit: onSaveAuthor,
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
						Authors
					</Typography>
				</Grid>
				<Grid item>
					<CButton
						type="primary"
						content={"Create a new author"}
						onClick={() => onOpenForm(type.CREATE)}
					/>
				</Grid>
				<Grid item>
					<DataTable columns={columns} rows={rows} width={"55%"} />
				</Grid>
			</Grid>
			{formOpen && (
				<AuthorForm
					formik={formik}
					formType={formType}
					open={formOpen}
					onCloseForm={onResetForm}
					type={formType}
					onDeleteAuthor={onDeleteAuthor}
				/>
			)}
		</>
	);
};

export default Authors;
