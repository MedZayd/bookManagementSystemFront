import * as Yup from "yup";

const validation = Yup.object().shape({
	name: Yup.string().required("Required"),
	isoCode: Yup.string().max(2, "Too Long").required("Required"),
});

const initialValues = {
	name: "",
	isoCode: "",
};

const fields = [
	{
		id: "name",
		name: "name",
		label: "Language",
		required: true,
		xs: 12,
	},
	{
		id: "isoCode",
		name: "isoCode",
		label: "Language ISO CODE",
		required: true,
		xs: 12,
	},
];

export const formConfig = {
	initialValues,
	validation,
	fields,
};
