import {createSlice} from "@reduxjs/toolkit"

export type UserType = { name: string, password: string | null }

type UserStateType = {
    authUser: UserType
    selectedUser: UserType
    isLoading: boolean
    isAuth: boolean
    error: string | null
}


const initialState: UserStateType = {
    authUser: {name: 'testuser1', password: 'yourpassword'},
    selectedUser: {name: 'testuser1', password: null},
    isAuth: true,
    isLoading: false,
    error: null
}

const userSlice = createSlice({
        name: 'user',
        initialState,
        reducers: {
            clearError: (state) => {
                state.error = null
            },
            clearAuthUser: (state) => {
                state.authUser.name = ''
                state.authUser.password = null
            },
            clearUser: (state) => {
                state.selectedUser.name = ''
            },
            setAuthUser: (state, action: { payload: UserType }) => {
                state.authUser = action.payload
            },
            setUser: (state, action: { payload: UserType }) => {
                state.selectedUser = action.payload
            },
            setIsAuth: (state, action: { payload: boolean }) => {
                state.isAuth = action.payload
            }
        },
        selectors: {
            selectAuthUser: (state) => state.authUser,
            selectUser: (state) => state.selectedUser,
            selectIsAuth: (state) => state.isAuth
        }
    }
)

export const {clearError, clearAuthUser, setAuthUser, setUser, clearUser, setIsAuth} = userSlice.actions
export const userSelectors = userSlice.selectors
export default userSlice.reducer
