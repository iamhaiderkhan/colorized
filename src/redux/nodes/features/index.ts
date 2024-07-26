import { combineReducers } from "@reduxjs/toolkit";

import { authenticationSlice } from "./authentication/slice";

export const featuresReducer = combineReducers({
  authentication: authenticationSlice
});
