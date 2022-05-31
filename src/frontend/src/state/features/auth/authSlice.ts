import {createSlice, PayloadAction, createAsyncThunk} from "@reduxjs/toolkit";
import authService from "./authService";
import {UserType} from "../../../../../Types/UserTypes";

type AuthState = {
    user: UserType | null;
    isError: boolean;
    isSuccess: boolean;
    isLoading: boolean;
    message: string | unknown;
};

// @ts-ignore
const user: UserType = JSON.parse(localStorage.getItem("user"));

const initialState: AuthState = {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
};

//Register user
export const register = createAsyncThunk(
    "auth/register",
    async (user: UserType, thunkAPI) => {
        try {
            return await authService.register(user);
        } catch (error: any) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
        }
    }
);

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset: (state: AuthState) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = false;
            state.message = "";
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.user = null;
            });
    },
});

// Action creators are generated for each case reducer function
export const {reset} = authSlice.actions;

export default authSlice.reducer;