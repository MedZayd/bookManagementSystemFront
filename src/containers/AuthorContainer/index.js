import { IconEdit, IconTrash } from "@tabler/icons";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import Authors from "../../components/Authors";
import { formConfig } from "../../components/Authors/config";
import CIconBtn from "../../ui-components/CIconBtn";
import {
	saveAuthor,
	fetchAuthors,
	selectAuthors,
	selectStatus,
	refreshStatus,
	deleteAuthor,
} from "./authorSlice";
import { STATUS, type } from "../../utils/constants";
import { getFormattedDate } from "../../utils";

const getColumns = (onAction) => [
	{ field: "id", headerName: "ID", sortable: false, width: 60 },
	{
		field: "firstName",
		headerName: "First name",
		sortable: false,
		width: 160,
		flex: 1,
	},
	{
		field: "lastName",
		headerName: "Last name",
		sortable: false,
		width: 160,
		flex: 1,
	},
	{
		field: "emal",
		headerName: "Email",
		sortable: false,
		width: 160,
		flex: 1,
	},
	{
		field: "birthDate",
		headerName: "Birth Date",
		sortable: false,
		width: 160,
		valueGetter: (params) => getFormattedDate(params, "birthDate"),
		flex: 1,
	},
	{
		field: "fullName",
		headerName: "Full name",
		sortable: false,
		width: 160,
		valueGetter: (params) =>
			`${params.getValue(params.id, "firstName") || ""} ${
				params.getValue(params.id, "lastName") || ""
			}`,
		flex: 1,
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

const AuthorContainer = () => {
	const [modal, setModal] = useState(false);
	const [formType, setType] = useState(false);
	const [author, setAuthor] = useState(formConfig.initialValues);

	const dispatch = useDispatch();
	const data = useSelector(selectAuthors);
	const status = useSelector(selectStatus);

	const handleOpenModal = (type) => {
		setType(type);
		setModal(true);
	};

	const handleCloseModal = () => {
		setModal(false);
		setAuthor(formConfig.initialValues);
	};

	const handleAction = (row, type) => {
		setType(type);
		setAuthor(row);
		setModal(true);
	};

	const handleDeleteAuthor = (values) => {
		console.log(values);
		dispatch(deleteAuthor(values.id));
	};

	const handleSaveAuthor = (values) => {
		let momentDate = moment.isMoment(values.birthDate)
			? values.birthDate
			: moment(values.birthDate);
		if (momentDate === "Invalid Date") {
			momentDate = null;
		}
		dispatch(
			saveAuthor({
				...values,
				birthDate: momentDate.isValid() ? momentDate : null,
			})
		);
	};

	useEffect(() => dispatch(fetchAuthors()), [dispatch]);

	useEffect(() => {
		if (status === STATUS.SUCCESS) {
			handleCloseModal();
			dispatch(refreshStatus());
		}
	}, [status, dispatch]);

	return (
		<Authors
			initialValues={author}
			formOpen={modal}
			formType={formType}
			columns={getColumns(handleAction)}
			rows={data}
			status={status}
			onCloseForm={handleCloseModal}
			onOpenForm={handleOpenModal}
			onSaveAuthor={handleSaveAuthor}
			onDeleteAuthor={handleDeleteAuthor}
		/>
	);
};

export default AuthorContainer;
