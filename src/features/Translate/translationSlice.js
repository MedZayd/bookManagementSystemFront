import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: "en" };

const slice = createSlice({
	name: "translation",
	initialState,
	reducers: {
		setTranslationValue: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const selectLanguage = (state) => state.value;

const { actions, reducer } = slice;

export const { setTranslationValue } = actions;

export default reducer;
