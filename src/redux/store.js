import { configureStore } from "@reduxjs/toolkit";
import campersReducer from "./campersSlice";
import filtersReducer from "./filterSlice";
import featuredReducer from "./featuredSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persisConfig = {
  key: "travel_trucks",
  storage,
}

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    filters: filtersReducer,
    featured:persistReducer(persisConfig,featuredReducer),
  },
  middleware: getDEfaultMiddleware => getDEfaultMiddleware({
    serializableCheck: {
      ignoreActions: [FLUSH,
        REHYDRATE,
        PAUSE,
        PERSIST,
        PURGE,
        REGISTER,]
    }
  })
});

export const persistor = persistStore(store);
