import { createSelector } from "@reduxjs/toolkit";
import { capitalizeFirstLetter } from "../helpers";

export const selectCampers = (state) => state.campers.items;
export const selectTotal = state => state.campers.totalHits;
export const selectIsLoading = (state) => state.campers.isLoading;
export const selectError = (state) => state.campers.error;
export const selectCamper = state => state.campers.camper;
export const selectFilter = state => state.filters.filter;
export const selectFeatured = state => state.featured.items;
export const selectFilteredCampers = createSelector(
    [selectCampers, selectFilter],
    (campers, filter) => {
        const { location = "", type = "", equipment = [] } = filter;

        return campers.filter((camper) => {

            const matchLocation = location.length != 0 ? camper.location === location : true;


            const matchEquipment = equipment.length > 0
                ? equipment.every((t) => {
                    if (t === "diesel") {
                        return camper.engine === "diesel"
                    } else if (t === "petrol") {
                        return camper.engine === "petrol"
                    } else if (t === "manual") {
                        return camper.engine === "manual"
                    } else if (t === "automatic") {
                        return camper.transmission === "automatic"
                    } else if (t === "ac") {
                        return camper.AC === true

                    } else if (t === "tv") {
                        return camper.TV === true
                    }
                    else {
                        return camper[t] === true
                    }
                })
                : true;

            let typeJoin = [];
            if (type.includes(" ")) {
                typeJoin = type.split(" ");
                typeJoin[1] = capitalizeFirstLetter(typeJoin[1]);
            }
            const matchTypes = type.length > 0
                ? (camper.form === (typeJoin.length > 0 ? typeJoin.join("") : type))
                : true;

            return matchLocation && matchTypes && matchEquipment;
        });
    }
);

