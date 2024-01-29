import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchParams: {
      q: "",
      sort: "repositories", //-->followers, repositories, joined
      order: "desc", //-->desc, asc
      per_page: 15, //--> integer
      page: 1, //--> integer
      selectedUserUrl: "",
    },
  },
  reducers: {
    changeParams(state, action) {
      const newParams = action.payload;
      state.searchParams = newParams;
    },
    selectUser(state, action) {
      state.searchParams.selectedUserUrl = action.payload;
    },
  },
});
export const { changeParams, selectUser } = searchSlice.actions;

export default searchSlice.reducer;
