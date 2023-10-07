
import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import rootReducer from "./features";

const persistConfig = {
  key: "root",
  storage,
  blacklist: [], //não persist o que estiver relacionado
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: [thunk],
});

const persistor = persistStore(store);

export { persistor, store };
export const useAppSelector = useSelector