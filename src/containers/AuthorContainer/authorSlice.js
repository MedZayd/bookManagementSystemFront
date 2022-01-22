import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../utils/constants";

const initialState = {
	data: [],
	status: STATUS.NAN,
};

const slice = createSlice({
	name: "authors",
	initialState,
	reducers: {
		fetchAuthors: () => {},
		setAuthors: (state, action) => {
			state.data = action.payload;
		},
		saveAuthor: () => {
			console.log("saveAuthor - action");
		},
		saveAuthorResponse: (state, action) => {
			state.status = action.payload;
		},
		refreshStatus: (state) => {
			state.status = STATUS.NAN;
		},
		deleteAuthor: () => {},
	},
});

export const selectAuthors = (state) => state.authors.data;
export const selectStatus = (state) => state.authors.status;

const { actions, reducer } = slice;

export const {
	fetchAuthors,
	setAuthors,
	saveAuthor,
	deleteAuthor,
	saveAuthorResponse,
	refreshStatus,
} = actions;

export default reducer;
