import moment from "moment";
import * as Yup from "yup";

const validation = Yup.object().shape({
	title: Yup.string().required("Required"),
	totalPages: Yup.number(),
	parent: Yup.string(),
	authorId: Yup.number().required("Required"),
});

const initialValues = {
	title: "",
	totalPages: "",
	publishedDate: moment(),
	authorId: "",
	photoLink: "",
	categoryIds: [],
	languagesIds: [],
};

const fields = (formData) => [
	{
		id: "title",
		name: "title",
		label: "Title",
		required: true,
		xs: 12,
	},
	{
		id: "totalPages",
		name: "totalPages",
		label: "Total Pages",
		xs: 12,
	},
	{
		id: "photoLink",
		name: "photoLink",
		label: "Photo Link",
		xs: 12,
	},
	{
		id: "publishedDate",
		name: "publishedDate",
		label: "Published Date",
		type: "date",
		xs: 12,
	},
	{
		id: "authorId",
		name: "authorId",
		label: "Author",
		required: true,
		type: "select",
		options: formData.authors,
		xs: 12,
	},
	{
		id: "categoryIds",
		name: "categoryIds",
		label: "Categories",
		type: "select",
		options: formData.categories,
		multiple: true,
		xs: 12,
	},
	{
		id: "languagesIds",
		name: "languagesIds",
		label: "Languages",
		type: "select",
		options: formData.languages,
		multiple: true,
		xs: 12,
	},
];

export const formConfig = {
	initialValues,
	validation,
	fields,
};
