import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../utils/constants";

const initialState = {
	data: [],
	formData: { categories: [], authors: [] },
	status: STATUS.NAN,
};

const slice = createSlice({
	name: "books",
	initialState,
	reducers: {
		fetchBooks: () => {},
		setBooks: (state, action) => {
			state.data = action.payload;
		},
		fetchFormData: () => {},
		setFormData: (state, action) => {
			state.formData = action.payload;
		},
		saveBook: () => {},
		saveBookResponse: (state, action) => {
			state.status = action.payload;
		},
		refreshStatus: (state) => {
			state.status = STATUS.NAN;
		},
		deleteBook: () => {},
	},
});

export const selectBooks = (state) => state.books.data;
export const selectFormData = (state) => state.books.formData;
export const selectStatus = (state) => state.books.status;

const { actions, reducer } = slice;

export const {
	fetchBooks,
	setBooks,
	fetchFormData,
	setFormData,
	saveBook,
	saveBookResponse,
	refreshStatus,
	deleteBook,
} = actions;

export default reducer;
