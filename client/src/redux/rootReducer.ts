import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import accountsReducer from "./Accounts/accountSlice";
import snapshotsReducer from "./Snapshots/snapshotSlice";
import userReducer from "./User/userSlice";

const configStorage = {
  key: "root",
  storage,
};

export const rootReducer = combineReducers({
  user: userReducer,
  snapshots: snapshotsReducer,
  accounts: accountsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default persistReducer(configStorage, rootReducer);
