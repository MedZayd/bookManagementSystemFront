import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../utils/constants";

const initialState = { open: false, type: "", message: "" };

const slice = createSlice({
	name: "toast",
	initialState,
	reducers: {
		openSuccessToast: (state, action) => {
			state.message = action.payload;
			state.open = true;
			state.type = STATUS.SUCCESS;
		},
		openErrorToast: (state, action) => {
			state.message = action.payload;
			state.open = true;
			state.type = STATUS.ERROR;
		},
		closeToast: (state) => {
			state.open = false;
		},
	},
});

export const selectToast = (state) => state.toast;

const { actions, reducer } = slice;

export const { openSuccessToast, openErrorToast, closeToast } = actions;

export default reducer;
