import { combineReducers } from "@reduxjs/toolkit";

import { applicationSlice } from "./nodes/application/slice";
import { featuresReducer } from "./nodes/features";

export const reducer = combineReducers({
  application: applicationSlice,
  features: featuresReducer
});
