import { Grid, Typography } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import Translate from "../../features/Translate";
import CButton from "../../ui-components/CButton";
import DataTable from "../../ui-components/DataTable";
import { type } from "../../utils/constants";
import { formConfig } from "./config";
import LangForm from "./LangForm";
import { useTranslation } from "react-i18next";

const Languages = ({
	initialValues,
	formOpen,
	formType,
	columns,
	rows,
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

	const { t } = useTranslation();
	return (
		<>
			<Grid container direction="column" spacing={4}>
				<Grid item container xs={12} justifyContent={"space-between"}>
					<Grid item>
						<Typography variant="h5" sx={{ fontFamily: "Poppins" }}>
							{t("common.languages.title")}
						</Typography>
					</Grid>
					<Grid item>
						<Translate />
					</Grid>
				</Grid>
				<Grid item>
					<CButton
						type="primary"
						content={"add language"}
						onClick={() => onOpenForm(type.CREATE)}
					/>
				</Grid>
				<Grid item>
					<DataTable columns={columns} rows={rows} width={"55%"} />
				</Grid>
			</Grid>
			{formOpen && (
				<LangForm
					formik={formik}
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

export default Languages;
