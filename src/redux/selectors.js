import { createSelector } from "@reduxjs/toolkit";

export const selectCampers = (state) => state.campers.items;
export const selectIsLoading = (state) => state.campers.isLoading;
export const selectError = (state) => state.campers.error;
export const selectCamper = state => state.campers.camper;
export const selectFilter = state => state.filters.filter;
export const selectFilteredCampers = createSelector([selectCampers, selectFilter], (campers, filter) => {
    const filtered = campers.filter(camper => camper.location === filter.location)

    return filtered;
})
