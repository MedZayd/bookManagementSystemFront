import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../utils/constants";

const initialState = {
	data: [],
	options: [],
	status: STATUS.NAN,
};

const slice = createSlice({
	name: "categories",
	initialState,
	reducers: {
		fetchCatgories: () => {},
		setCategories: (state, action) => {
			state.data = action.payload;
		},
		fetchParentCategories: () => {},
		setOptions: (state, action) => {
			state.options = action.payload;
		},
		saveCategory: () => {},
		saveCategoryResponse: (state, action) => {
			state.status = action.payload;
		},
		refreshStatus: (state) => {
			state.status = STATUS.NAN;
		},
		deleteCategory: () => {},
	},
});

export const selectCategories = (state) => state.categories.data;
export const selectOptions = (state) => state.categories.options;
export const selectStatus = (state) => state.categories.status;

const { actions, reducer } = slice;

export const {
	fetchCatgories,
	setCategories,
	fetchParentCategories,
	setOptions,
	saveCategory,
	saveCategoryResponse,
	refreshStatus,
	deleteCategory,
} = actions;

export default reducer;
