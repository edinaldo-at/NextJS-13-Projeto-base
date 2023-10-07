import {createSlice, PayloadAction} from "@reduxjs/toolkit"

//type initialState = {
//    value: AuthStates;
//}

//type AuthState = {
//    isAuth: Boolean;
//    username: String;
//    email: String;
//    isModerator: Boolean;
//}

const initialState = {
    value: {
        isAuth: false,
        username: "",
        email: "",
        isModerator: false,
    } //as AuthState,
} //as initialState;

export const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logOut: () => {
            return initialState;
        },
        logIn: (state, action ) => {
            return {
                value: {
                    isAuth: true,
                    username: action.payload.username,
                    email: action.payload.email,
                    isModerator: action.payload.isModerator
                }
            }
        },
        toggleModerator: (state) => {
            state.value.isModerator = !state.value.isModerator;
        }
    }
});

export const { logIn, logOut, toggleModerator } = auth.actions;
export default auth.reducer;