import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { userJSON } from "@/lib/utils/user";




export const signUp = createAsyncThunk("auth/register", async (values, { rejectWithValue }) => {
  try {
    const res = await axios({
      method: "POST",
      url: `http://localhost:4200/api/auth/register`,
      data: values,
    });
    const data = await res.data;
    localStorage.removeItem("values");
    return data; // Will be passed to the fulfilled case
  } catch (err) {
    return rejectWithValue(err.response?.data?.message || "An error occurred during sign-up.");
  }
});

export const login = createAsyncThunk("auth/login", async (values, {rejectWithValue}) => {
  try {
    const res = await axios({
      method: "POST",
      url: `http://localhost:4200/api/auth/login`,
      data: values,
    });
    const data = await res.data;
    return data;
  } catch (err) {
    console.log(err);
    return rejectWithValue(err.response?.data?.message || "An error occurred during sign-up.");

  }
});



const initialState = {
  user: userJSON() || {},
  pageLoading: false,
  response: "",
  loading: false,
  successful: false,
  error:null
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = {};
      state.response = "";
      state.successful = false;
      localStorage.removeItem("user");
    },
    updateUser: (state) => {
      state.user = userJSON();
    },
    updateState: (state) => {
      state.successful = false;
      state.response = "";
    },
    updatePageLoading: (state, action) => {
      state.pageLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      state.user = action.payload.user;
      state.response = action.payload.message;
      state.successful = action.payload.successful;
    });
    builder.addCase(login.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(signUp.fulfilled, (state, action) => {
      state.loading = false;
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      state.successful = action.payload.message;
      state.user = action.payload.user;
      state.response = action.payload.message;
      state.error = null;
    });
    builder.addCase(signUp.pending, (state) => {
      state.loading = true;
      state.error = null; // Clear any previous error
    });
    builder.addCase(signUp.rejected, (state, action) => {
      state.loading = false;
      state.successful = false;
      state.error = action.payload || action.error.message;
    });

    

  },
});

export const { logout, updateUser, updateState, updatePageLoading } =
  userSlice.actions;

export default userSlice.reducer;
