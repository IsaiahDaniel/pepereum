import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authService } from "./authService";

type authType = {
  user: any;
  isSuccess: boolean;
  isLoading: boolean;
  isError: boolean;
  message: string;
};

const user = JSON.parse(localStorage.getItem("user") as any);

const initialState: authType = {
  user: user ? user : null,
  isSuccess: false,
  isLoading: false,
  isError: false,
  message: "",
};

export const register = createAsyncThunk(
  "auth/register",
  async (user: any, thunkAPI: any) => {
    try {
      return await authService.register(user);
    } catch (error: any) {
      console.log("error Register", error);
      const message = error.response.data.error;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (user: any, thunkAPI: any) => {
    try {
      return await authService.login(user);
    } catch (error: any) {
      console.log("error login", error);
      // return thunkAPI.rejectWithValue(error.data.error);
      const message = error.response.data.error;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const verifyEmail = createAsyncThunk(
  "auth/verifyEmail",
  async (email: any, thunkAPI: any) => {
    try {
      return await authService.verifyEmail(email);
    } catch (error: any) {
      const message = error.response.data.error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const forgotPasssword = createAsyncThunk(
  "auth/forgotpassword",
  async (email: any, thunkAPI: any) => {
    try {
      return await authService.resetPassword(email);
    } catch (error: any) {
      const message = error.response.data.error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", () => {
  authService.logout();
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state: any) => {
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
      state.message = "";
      state.user = null;
    },
    resetLoaders: (state: any) => {
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
        state.message = "";
        state.isSuccess = false;
      })
      .addCase(register.rejected, (state, action: PayloadAction<any>) => {
        console.log("action register rejected", action);
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      })
      .addCase(register.fulfilled, (state, action: PayloadAction<any>) => {
        console.log("action register success", action);
        state.user = action.payload;
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.message = action.payload.message;
      })

      .addCase(login.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
        state.message = "";
        state.isSuccess = false;
      })
      .addCase(login.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<any>) => {
        state.user = action.payload.response;
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload.message;
      })

      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = false;
        state.message = "";
      })

      .addCase(verifyEmail.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
        state.message = "";
        state.isSuccess = false;
      })
      .addCase(verifyEmail.rejected, (state, action: PayloadAction<any>) => {
        console.log("action verify email rejected", action);
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      })
      .addCase(verifyEmail.fulfilled, (state, action: PayloadAction<any>) => {
        console.log("action verify email fulfilled", action);
        state.user = action.payload.response;
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload.message;
      })

      .addCase(forgotPasssword.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
        state.message = "";
        state.isSuccess = false;
      })
      .addCase(forgotPasssword.rejected, (state, action: PayloadAction<any>) => {
        console.log("action verify email rejected", action);
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      })
      .addCase(forgotPasssword.fulfilled, (state, action: PayloadAction<any>) => {
        console.log("action verify email fulfilled", action);
        state.user = action.payload.response;
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload.message;
      });
  },
});

export const { reset, resetLoaders } = authSlice.actions;

export default authSlice.reducer;

