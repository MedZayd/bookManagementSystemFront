import * as Yup from "yup";

const validation = Yup.object().shape({
	name: Yup.string().required("Required"),
	parent: Yup.string(),
});

const initialValues = {
	name: "",
	parentId: "",
};

const fields = (options) => [
	{
		id: "name",
		name: "name",
		label: "Name",
		required: true,
		xs: 12,
	},
	{
		id: "parentId",
		name: "parentId",
		label: "Parent Category",
		required: false,
		type: "select",
		options,
		xs: 12,
	},
];

export const formConfig = {
	initialValues,
	validation,
	fields,
};
