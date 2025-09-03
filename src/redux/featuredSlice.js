import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "featured",
    initialState: {
        items: []
    },
    reducers: {
        addFeatured: (state, action) => {
            const exists = state.items.some(item => item.id === action.payload.id);

            if (exists) return;

            return {
                ...state,
                items: [...state.items, action.payload]
            };
        },

        deleteFeatured: (state, action) => {
            return {
                ...state, items: state.items.filter(
                    feature => feature.id !== action.payload
                )
            }
        }
    }
});

export const { addFeatured,deleteFeatured} = slice.actions;
export default slice.reducer;