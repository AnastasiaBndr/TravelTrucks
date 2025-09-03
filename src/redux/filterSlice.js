import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "filters",
    initialState: {
        filter: { equipment: "", location: [], type: [] }
    },
    reducers: {
        setFilter: (state, action) => {
            state.filter = {
                ...state.filter,
                ...action.payload
            }
        }
    }
});

export const { setFilter } = slice.actions;
export default slice.reducer;