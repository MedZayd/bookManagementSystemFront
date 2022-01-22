import React from "react";
import { useField, useFormikContext } from "formik";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";

const DatePicker = ({ ...props }) => {
	const { setFieldValue } = useFormikContext();
	const [field] = useField(props);
	return (
		<>
			<DesktopDatePicker
				{...field}
				{...props}
				selected={(field.value && new Date(field.value)) || null}
				onChange={(val) => {
					setFieldValue(field.name, val);
				}}
			/>

			<DesktopDatePicker
				label={field.label}
				inputFormat="MM/dd/yyyy"
				value={form.values[field.name]}
				onChange={(value) => form.handleChange(value)}
				renderInput={(params) => <StyledTextField {...params} />}
			/>
		</>
	);
};

export default DatePicker;
