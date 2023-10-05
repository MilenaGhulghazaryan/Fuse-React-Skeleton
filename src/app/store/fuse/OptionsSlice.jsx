import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const GetSlider = createAsyncThunk("get/slider", async (_, thunkAPI) => {
    try {
        const response = await axios.get(`http://localhost:3004/slider`)
        return response.data
    }
    catch (error) {
        console.log(error);
    }
});

export const addPages = createAsyncThunk('post/page', async (data, thunkAPI) => {
    try {
        const response = await axios.post(` http://localhost:3004/slider`, data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
});


export const GetElementById = createAsyncThunk('edit/slide', async (id, thunkAPI) => {
    try {
        const response = await axios.get(`http://localhost:3004/slider/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
});


export const EditDatas = createAsyncThunk('edit/data', async (data, thunkAPI) => {
    try {
        const response = await axios.put(`http://localhost:3004/slider/${data.id}`, data);
        console.log(response.data, 'editData');
        return response.data;
    } catch (error) {
        console.log(error);
    }
});


export const DeleteDatas = createAsyncThunk('delete/data', async (data, thunkAPI) => {
    try {
        const response = await axios.delete(`http://localhost:3004/slider/${data.id}`, data);
        console.log(response.data, 'deleteData');
        return response.data;
    } catch (error) {
        console.log(error);
    }
});

const SliderSlice = createSlice({
    name: "slider",
    initialState: {
        slider: [],
        loading: false,
        error: "",
        addPage: '',
        btnTitle: '',
        btnTitleColor: '',
        btnColor: '',
        addCategory: '',
        addProduct: '',
        title: '',
        showBox: false,
        colorBtn: '',
        colors: '',
        images: [],
        editArr: [],
        status:true
       
      
    },
    extraReducers: {
        [GetSlider.pending]: (state) => {
            state.loading = true
        },
        [GetSlider.fulfilled]: (state, action) => {
            state.slider = action.payload
            state.loading = false
            state.error = ""
        },
        [GetSlider.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        [GetElementById.pending]: (state) => {
            state.loading = true
        },
        [GetElementById.fulfilled]: (state, action) => {
            state.editArr = action.payload
            state.loading = false
            state.error = ""
        },
        [GetElementById.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        }
    },

    reducers: {
        setAddPage: (state, action) => {
            state.addPage = action.payload
        },
        setAddCategory: (state, action) => {
            state.addCategory = action.payload
        },
        setAddProduct: (state, action) => {
            state.addProduct = action.payload
        },
        changeBtnTitle: (state, action) => {
            state.btnTitle = action.payload
        },
        setBtnTitleColor: (state, action) => {
            state.btnTitleColor = action.payload
        },
        setBtnColor: (state, action) => {
            state.btnColor = action.payload
        },
        setTitle: (state, action) => {
            state.title = action.payload
        },
        setShowBox: (state, action) => {
            state.showBox = action.payload
        },
        setColors: (state, action) => {
            state.colors = action.payload
        },
        setColorBtn: (state, action) => {
            state.colorBtn = action.payload
        },
        setImages: (state, action) => {
            state.images = action.payload
        },
        setStatus:(state,action)=>{
            state.status = action.payload
        }
    }
})
export const { setAddPage, changeBtnTitle, setBtnTitleColor, setBtnColor, setAddCategory, setAddProduct, setTitle, setShowBox, setColors, setColorBtn, setImages,setStatus } = SliderSlice.actions
export default SliderSlice.reducer

