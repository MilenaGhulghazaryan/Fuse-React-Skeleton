import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const GetPartners = createAsyncThunk("get/partners", async (_, thunkAPI) => {
    try {
        const response = await axios.get(`http://localhost:3004/partners`)
        return response.data
    }
    catch (error) {
        console.log(error);
    }
});

export const addPartners = createAsyncThunk('posts/partners', async (data, thunkAPI) => {
    try {
        const response = await axios.post(`http://localhost:3004/partners`, data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
});


export const GetPartnerById = createAsyncThunk('edit/partner', async (id, thunkAPI) => {
    try {
        const response = await axios.get(`http://localhost:3004/partners/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
});


export const EditPartnersDatas = createAsyncThunk('edit/partnerData', async (data, thunkAPI) => {
    try {
        const response = await axios.put(`http://localhost:3004/partners/${data.id}`, data);
        console.log(response.data, 'editData');
        return response.data;
    } catch (error) {
        console.log(error);
    }
});


export const DeletePartnerDatas = createAsyncThunk('delete/data', async (data, thunkAPI) => {
    try {
        const response = await axios.delete(`http://localhost:3004/partners/${data.id}`, data);
        console.log(response.data, 'deleteData');
        return response.data;
    } catch (error) {
        console.log(error);
    }
});

const PartnersSlice = createSlice({
    name: "partners",
    initialState: {
        partners: [],
        loading: false,
        error: "",
        partnersTitle:'',
        link:'',
        images: [],
        editPartnerArr:[],
        armenia:false,
        armValue:'',
        usValue:'',
        ruValue:''
       
    },
    extraReducers: {
        [GetPartners.pending]: (state) => {
            state.loading = true
        },
        [GetPartners.fulfilled]: (state, action) => {
            state.partners = action.payload
            state.loading = false
            state.error = ""
        },
        [GetPartners.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        [GetPartnerById.pending]: (state) => {
            state.loading = true
        },
        [GetPartnerById.fulfilled]: (state, action) => {
            state.editPartnerArr = action.payload
            state.loading = false
            state.error = ""
        },
        [GetPartnerById.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        }
    },

    reducers: {
        changeImages: (state, action) => {
            state.images = action.payload
        },
        setPartnersTitle:(state,action)=>{
            state.partnersTitle = action.payload
        },
        setLink:(state,action)=>{
            state.link = action.payload
        },
        setArmenia:(state,action)=>{
            state.armenia = action.payload
        },
        setArmValue:(state,action)=>{
            state.armValue = action.payload
        },
        setUsValue:(state,action)=>{
            state.usValue = action.payload
        },
        setRuValue:(state,action)=>{
            state.ruValue = action.payload
        },

  
    }
})
export const { changeImages,setPartnersTitle,setLink, setArmenia, setArmValue,setRuValue,setUsValue } = PartnersSlice.actions
export default PartnersSlice.reducer

