import { IconEdit, IconTrash } from "@tabler/icons";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Languages from "../../components/Languages";
import { formConfig } from "../../components/Languages/config";
import CIconBtn from "../../ui-components/CIconBtn";
import { STATUS, type } from "../../utils/constants";
import {
	deleteLanguage,
	fetchLanguages,
	refreshStatus,
	saveLanguage,
	selectLanguages,
	selectStatus,
} from "./langSlice";

const getColumns = (onAction) => [
	{ field: "id", headerName: "ID", sortable: false, width: 60 },
	{
		field: "name",
		headerName: "Language",
		sortable: false,
		width: 160,
		flex: 1,
	},
	{
		field: "isoCode",
		headerName: "ISO Code",
		sortable: false,
		width: 60,
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

const LangContainer = () => {
	const [modal, setModal] = useState(false);
	const [formType, setType] = useState(false);
	const [lang, setLang] = useState(formConfig.initialValues);

	const dispatch = useDispatch();
	const data = useSelector(selectLanguages);
	const status = useSelector(selectStatus);

	const handleOpenModal = (type) => {
		setType(type);
		setModal(true);
	};

	const handleCloseModal = () => {
		setModal(false);
		setLang(formConfig.initialValues);
	};

	const handleAction = (row, type) => {
		setLang(row);
		handleOpenModal(type);
	};

	const handleDelete = (values) => {
		dispatch(deleteLanguage(values.id));
	};

	const handleSave = (values) => {
		dispatch(saveLanguage(values));
	};

	useEffect(() => dispatch(fetchLanguages()), [dispatch]);

	useEffect(() => {
		if (status === STATUS.SUCCESS) {
			handleCloseModal();
			dispatch(refreshStatus());
		}
	}, [status, dispatch]);

	return (
		<Languages
			initialValues={lang}
			formOpen={modal}
			formType={formType}
			columns={getColumns(handleAction)}
			rows={data}
			status={status}
			onCloseForm={handleCloseModal}
			onOpenForm={handleOpenModal}
			onSave={handleSave}
			onDelete={handleDelete}
		/>
	);
};

export default LangContainer;
