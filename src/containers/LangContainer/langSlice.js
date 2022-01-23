import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../utils/constants";

const initialState = {
	data: [],
	status: STATUS.NAN,
};

const slice = createSlice({
	name: "languages",
	initialState,
	reducers: {
		fetchLanguages: () => {},
		setLanguages: (state, action) => {
			state.data = action.payload;
		},
		saveLanguage: () => {
			console.log("saveAuthor - action");
		},
		saveLanguageResponse: (state, action) => {
			state.status = action.payload;
		},
		refreshStatus: (state) => {
			state.status = STATUS.NAN;
		},
		deleteLanguage: () => {},
	},
});

export const selectLanguages = (state) => state.languages.data;
export const selectStatus = (state) => state.languages.status;

const { actions, reducer } = slice;

export const {
	fetchLanguages,
	setLanguages,
	saveLanguage,
	deleteLanguage,
	saveLanguageResponse,
	refreshStatus,
} = actions;

export default reducer;
