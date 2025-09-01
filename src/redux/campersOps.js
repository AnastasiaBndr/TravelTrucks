import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/";



const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async (page, thunkAPI) => {
    try {
      const resp = await axios.get(`campers?page=${page}&limit=${4}`);
      return resp.data.items;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const fetchById = createAsyncThunk(
  "campers/fetchById",
  async (id, thunkAPI) => {
    try {
      const resp = await axios.get(`campers/${id}`);
      return resp.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export { fetchCampers,fetchById };
