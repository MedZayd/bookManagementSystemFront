import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: "idle" };

const slice = createSlice({
	name: "loading",
	initialState,
	reducers: {
		setLoading(state, action) {
			state.value = action.payload ? "loading" : "idle";
		},
	},
});

export const selectLoading = (state) => state.loading.value === "loading";

const { actions, reducer } = slice;

export const { setLoading } = actions;

export default reducer;
