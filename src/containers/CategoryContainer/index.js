import { IconEdit, IconTrash } from "@tabler/icons";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Categories from "../../components/Categories";
import { formConfig } from "../../components/Categories/config";
import CIconBtn from "../../ui-components/CIconBtn";
import {
	saveCategory,
	fetchCatgories,
	selectCategories,
	selectStatus,
	refreshStatus,
	deleteCategory,
	fetchParentCategories,
	selectOptions,
} from "./categorySlice";
import { STATUS, type } from "../../utils/constants";

const getColumns = (onAction) => [
	{ field: "id", headerName: "ID", sortable: false, width: 60 },
	{
		field: "name",
		headerName: "Category",
		sortable: false,
		width: 160,
		flex: 1,
	},
	{
		field: "parentId",
		headerName: "Parent Id",
		sortable: false,
	},
	{
		field: "parentName",
		headerName: "Parent Category",
		sortable: false,
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

const CategoryContainer = () => {
	const [modal, setModal] = useState(false);
	const [formType, setType] = useState(false);
	const [category, setCategory] = useState(formConfig.initialValues);

	const dispatch = useDispatch();
	const data = useSelector(selectCategories);
	const status = useSelector(selectStatus);
	const options = useSelector(selectOptions);

	const handleOpenModal = (type) => {
		dispatch(fetchParentCategories());
		setType(type);
		setModal(true);
	};

	const handleCloseModal = () => {
		setModal(false);
		setCategory(formConfig.initialValues);
	};

	const handleAction = (row, type) => {
		setCategory(row);
		handleOpenModal(type);
	};

	const handleDelete = (values) => {
		dispatch(deleteCategory(values.id));
	};

	const handleSave = (values) => {
		dispatch(saveCategory(values));
	};

	useEffect(() => dispatch(fetchCatgories()), [dispatch]);

	useEffect(() => {
		if (status === STATUS.SUCCESS) {
			handleCloseModal();
			dispatch(refreshStatus());
		}
	}, [status, dispatch]);

	return (
		<Categories
			initialValues={category}
			formOpen={modal}
			formType={formType}
			columns={getColumns(handleAction)}
			rows={data}
			status={status}
			options={options}
			onCloseForm={handleCloseModal}
			onOpenForm={handleOpenModal}
			onSave={handleSave}
			onDelete={handleDelete}
		/>
	);
};

export default CategoryContainer;
