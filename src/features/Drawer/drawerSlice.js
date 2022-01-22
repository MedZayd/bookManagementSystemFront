import { createSlice } from "@reduxjs/toolkit";

const initialState = { open: true };

const slice = createSlice({
	name: "drawer",
	initialState,
	reducers: {
		setDrawer: (state, action) => {
			state.open = action.payload;
		},
	},
});

export const selectDrawer = (state) => state.drawer.open;

const { actions, reducer } = slice;

export const { setDrawer } = actions;

export default reducer;
