import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";



export const goitApi = axios.create({
    baseURL: 'https://connections-api.goit.global/',
})

export const setAuthHeader = token => {
  goitApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};



export const register = createAsyncThunk("auth/register", async (credentials, thunkApi) => {
    try {
        const { data } = await goitApi.post('/users/signup', credentials)
        setAuthHeader(data.token)
        return data
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
})

export const login = createAsyncThunk("auth/login", async (credentials, thunkApi) => {
    try {
        const { data } = await goitApi.post('/users/login', credentials)
        setAuthHeader(data.token)
        return data
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
})


export const logout = createAsyncThunk("auth/logout", async (_, thunkApi) => {
    try {
        await goitApi.post('/users/logout')
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
})

