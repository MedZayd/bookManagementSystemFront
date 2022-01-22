import { TextField } from "@mui/material";
import DatePicker from "@mui/lab/DatePicker";
import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";

const styles = { fontFamily: "Poppins" };

const StyledTextField = (props) => (
	<TextField
		fullWidth
		sx={styles}
		InputProps={{ sx: styles }}
		InputLabelProps={{ sx: styles }}
		{...props}
	/>
);

const FormField = ({ field, form }) => {
	switch (field.type) {
		case "text":
		case "number":
			return (
				<StyledTextField
					id={field.id}
					name={field.name}
					label={field.label}
					type={field.type}
					required={field.required || false}
					value={form.values[field.name]}
					onChange={form.handleChange}
					error={form.touched[field.name] && Boolean(form.errors[field.name])}
					helperText={form.touched[field.name] && form.errors[field.name]}
				/>
			);
		case "date":
			return (
				<DatePicker
					label={field.label}
					inputFormat="DD/MM/yyyy"
					value={form.values[field.name]}
					onChange={(value) => form.setFieldValue(field.name, value)}
					renderInput={(params) => (
						<StyledTextField
							{...params}
							id={field.id}
							name={field.name}
							helperText={
								field.required &&
								form.touched[field.name] &&
								form.errors[field.name]
							}
							type={field.type}
							required={field.required || false}
							error={
								field.required &&
								form.touched[field.name] &&
								Boolean(form.errors[field.name])
							}
						/>
					)}
				/>
			);
		case "select":
			return (
				<FormControl fullWidth>
					<InputLabel>{field.label}</InputLabel>
					<Select
						id={field.id}
						name={field.name}
						label={field.label}
						required={field.required || false}
						value={form.values[field.name]}
						multiple={field.multiple || false}
						onChange={form.handleChange}
						error={form.touched[field.name] && Boolean(form.errors[field.name])}
					>
						<MenuItem value="">
							<em>None</em>
						</MenuItem>
						{(field.options || []).map(({ value, label }) => (
							<MenuItem key={value} value={value}>
								{label}
							</MenuItem>
						))}
					</Select>
					{form.touched[field.name] && form.errors[field.name] && (
						<FormHelperText>{form.errors[field.name]}</FormHelperText>
					)}
				</FormControl>
			);
		default:
			return (
				<StyledTextField
					id={field.id}
					name={field.name}
					label={field.label}
					type={field.type}
					required={field.required || false}
					value={form.values[field.name]}
					onChange={form.handleChange}
					error={form.touched[field.name] && Boolean(form.errors[field.name])}
					helperText={form.touched[field.name] && form.errors[field.name]}
				/>
			);
	}
};

export default FormField;
