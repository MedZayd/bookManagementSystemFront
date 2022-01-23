import { IconEdit, IconTrash } from "@tabler/icons";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { formConfig } from "../../components/Books/config";
import CIconBtn from "../../ui-components/CIconBtn";
import {
	deleteBook,
	fetchBooks,
	fetchFormData,
	refreshStatus,
	saveBook,
	selectBooks,
	selectFormData,
	selectStatus,
} from "./bookSlice";
import { STATUS, type } from "../../utils/constants";
import Books from "../../components/Books";
import { convertListToString, getFormattedDate } from "../../utils";
import { Avatar } from "@mui/material";

const renderAvatar = (params, key) => {
	console.log(params.row);
	return <Avatar alt="Remy Sharp" src={params.row.photoLink} />;
};

const getColumns = (onAction) => [
	{ field: "id", headerName: "ID", sortable: false, width: 60 },
	{
		field: "title",
		headerName: "Title",
		sortable: false,
		width: 160,
		flex: 1,
	},
	{
		field: "totalPages",
		headerName: "Total Pages",
		sortable: false,
		flex: 1,
	},
	{
		field: "publishedDate",
		headerName: "Published Date",
		sortable: false,
		valueGetter: (params) => getFormattedDate(params, "publishedDate"),
		flex: 1,
	},
	{
		field: "authorName",
		headerName: "Author",
		sortable: false,
		flex: 1,
	},
	{
		field: "categories",
		headerName: "Categories",
		sortable: false,
		valueGetter: (params) => convertListToString(params, "categories"),
		flex: 1,
	},
	{
		field: "langs",
		headerName: "Languages",
		sortable: false,
		valueGetter: (params) => convertListToString(params, "languages"),
		flex: 1,
	},
	{
		field: "photoLink",
		headerName: "Photo",
		sortable: false,
		width: 120,
		renderCell: (params) => renderAvatar(params, "photoLink"),
	},
	{
		field: "",
		headerName: "",
		sortable: false,
		width: 120,
		renderCell: (params) => (
			<>
				<CIconBtn
					type="primary"
					icon={<IconEdit />}
					onClick={() => onAction(params.row, type.EDIT)}
				/>
				<CIconBtn
					type="danger"
					icon={<IconTrash />}
					onClick={() => onAction(params.row, type.DELETE)}
				/>
			</>
		),
	},
];

const BookContainer = () => {
	const [modal, setModal] = useState(false);
	const [formType, setType] = useState(false);
	const [book, setBook] = useState(formConfig.initialValues);

	const dispatch = useDispatch();
	const data = useSelector(selectBooks);
	const status = useSelector(selectStatus);
	const formData = useSelector(selectFormData);

	const handleOpenModal = (type) => {
		dispatch(fetchFormData());
		setType(type);
		setModal(true);
	};

	const handleCloseModal = () => {
		setModal(false);
		setBook(formConfig.initialValues);
	};

	const handleAction = (row, type) => {
		setBook(row);
		handleOpenModal(type);
	};

	const handleDelete = (values) => {
		dispatch(deleteBook(values.id));
	};

	const handleSave = (values) => {
		console.log(values);
		dispatch(saveBook(values));
	};

	useEffect(() => dispatch(fetchBooks()), [dispatch]);

	useEffect(() => {
		if (status === STATUS.SUCCESS) {
			handleCloseModal();
			dispatch(refreshStatus());
		}
	}, [status, dispatch]);

	return (
		<Books
			initialValues={book}
			formOpen={modal}
			formType={formType}
			columns={getColumns(handleAction)}
			rows={data}
			status={status}
			formData={formData}
			onCloseForm={handleCloseModal}
			onOpenForm={handleOpenModal}
			onSave={handleSave}
			onDelete={handleDelete}
		/>
	);
};

export default BookContainer;
