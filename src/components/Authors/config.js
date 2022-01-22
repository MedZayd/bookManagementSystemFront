import * as Yup from "yup";

const validation = Yup.object().shape({
	firstName: Yup.string()
		.min(2, "Too Short!")
		.max(50, "Too Long!")
		.required("Required"),
	lastName: Yup.string()
		.min(2, "Too Short!")
		.max(50, "Too Long!")
		.required("Required"),
});

const initialValues = {
	firstName: "",
	lastName: "",
	birthDate: "",
};

const fields = [
	{
		id: "firstName",
		name: "firstName",
		label: "First Name",
		required: true,
		xs: 12,
	},
	{
		id: "lastName",
		name: "lastName",
		label: "Last Name",
		required: true,
		xs: 12,
	},
	{
		id: "birthDate",
		name: "birthDate",
		label: "Birth Date",
		type: "date",
		xs: 12,
	},
];

export const formConfig = {
	initialValues,
	validation,
	fields,
};
