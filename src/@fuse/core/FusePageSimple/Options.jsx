import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { useDispatch, useSelector } from 'react-redux';
import { GetElementById, GetSlider, setAddCategory, setAddPage, setAddProduct } from 'app/store/fuse/OptionsSlice';
import AddPage from './AddPage';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Box } from '@mui/system';
import { useParams } from 'react-router-dom';

const filterOptions = createFilterOptions({
    matchFrom: 'start',
    stringify: (option) => option,
});

export const Pages = () => {
    const dispatch = useDispatch()
    const handleChange = (event) => {
        dispatch(setAddPage(event.target.value));
    };
    const addPage = useSelector(state => state.slider.addPage)
    const routeParams = useParams();
    let edit = routeParams.id != 'new'
    const editArr = useSelector(state => state.slider.editArr)
    console.log(editArr, 'edittt');
    React.useEffect(() => {
        edit && dispatch(GetElementById(routeParams.id))
    }, [routeParams.id])

    React.useEffect(() => {
        if (editArr) {
            editArr.pageTitle && dispatch(setAddPage(editArr.pageTitle))
        }
    }, [editArr])

    return (
        <Box sx={{ width: '90%', marginLeft: '30px' }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label" >Էջեր</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={addPage}
                    label="Էջեր"
                    onChange={handleChange}
                >
                    <MenuItem value='Կատալոգ /catalogue'>Կատալոգ /catalogue </MenuItem>
                    <MenuItem value='ՀՏՀ /faq'>ՀՏՀ /faq</MenuItem>
                    <MenuItem value='Ապրանքներ /products/list'>Ապրանքներ /products/list</MenuItem>
                    <MenuItem value='Տեսանյութեր /video'>Տեսանյութեր /video</MenuItem>
                    <MenuItem value='Տեսադարան /gallery'>Տեսադարան /gallery</MenuItem>
                    <MenuItem value='Մեր մասին /about-us'>Մեր մասին /about-us</MenuItem>
                </Select>
            </FormControl>
        </Box>
    )
}

export default function Categories() {
    const dispatch = useDispatch()
    const handleChange = (event) => {
        dispatch(setAddCategory(event.target.value));
    };
    const addCategory = useSelector(state => state.slider.addCategory)
    const routeParams = useParams();
    let edit = routeParams.id != 'new'
    const editArr = useSelector(state => state.slider.editArr)
    console.log(editArr, 'edittt');
    React.useEffect(() => {
        edit && dispatch(GetElementById(routeParams.id))
    }, [routeParams.id])
    React.useEffect(() => {
        if (editArr) {
            editArr.addCategory && dispatch(setAddCategory(editArr.addCategory))
        }
    }, [editArr])

    return (
        <Box sx={{ width: '90%', marginLeft: '30px' }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Կատեգորիա</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={addCategory}
                    label="Կատեգորիա"
                    onChange={handleChange}
                >
                    <MenuItem value='ՄԻՆԻՊԼԱՍՏԻՆԱՆԵՐ և ՊՏՈՒՏԱԿՆԵՐ '>ՄԻՆԻՊԼԱՍՏԻՆԱՆԵՐ և ՊՏՈՒՏԱԿՆԵՐ </MenuItem>
                    <MenuItem value='ԱՏԱՄՆԱԲՈՒԺԱԿԱՆ ՆՅՈՒԹԵՐ'>ԱՏԱՄՆԱԲՈՒԺԱԿԱՆ ՆՅՈՒԹԵՐ</MenuItem>
                    <MenuItem value='ՍԱՐՔԵՐ և ՍԱՐՔԱՎՈՐՈՒՄՆԵՐ'>ՍԱՐՔԵՐ և ՍԱՐՔԱՎՈՐՈՒՄՆԵՐ</MenuItem>
                    <MenuItem value='ՆԵՐԱՐԳԱՆԴԱՅԻՆ ՀԱԿԱԲԵՂՄՆԱՎՈՐԻՉՆԵՐ'>ՆԵՐԱՐԳԱՆԴԱՅԻՆ ՀԱԿԱԲԵՂՄՆԱՎՈՐԻՉՆԵՐ</MenuItem>
                    <MenuItem value='ՊՐՈԹԵԶԱՎՈՐՄԱՆ ԱՏԱՄՆԵՐ'>ՊՐՈԹԵԶԱՎՈՐՄԱՆ ԱՏԱՄՆԵՐ</MenuItem>
                    <MenuItem value='ՊԼՈՄԲԱՆՅՈՒԹԵՐ'>ՊԼՈՄԲԱՆՅՈՒԹԵՐ</MenuItem>
                    <MenuItem value='ԿԵՐԱՄԻԿԱՅԻ ՀԱՄԱՐ ՆՅՈՒԹԵՐ և ԳՈՐԾԻՔՆԵՐ'>ԿԵՐԱՄԻԿԱՅԻ ՀԱՄԱՐ ՆՅՈՒԹԵՐ և ԳՈՐԾԻՔՆԵՐ</MenuItem>
                    <MenuItem value='ՎԻՐԱԲՈՒԺԱԿԱՆ ԲՈՐԵՐ'>ՎԻՐԱԲՈՒԺԱԿԱՆ ԲՈՐԵՐ</MenuItem>
                </Select>
            </FormControl>
        </Box>

    )
}
export const Products = () => {
    const dispatch = useDispatch()
    const handleChange = (event) => {
        dispatch(setAddProduct(event.target.value));
    };
    const addProduct = useSelector(state => state.slider.addProduct)
    const routeParams = useParams();
    let edit = routeParams.id != 'new'
    const editArr = useSelector(state => state.slider.editArr)
    console.log(editArr, 'edittt');
    React.useEffect(() => {
        edit && dispatch(GetElementById(routeParams.id))
    }, [routeParams.id])
    React.useEffect(() => {
        if (editArr) {
            // editArr[`addProduct`] && dispatch(setAddProduct(editArr[`addProduct`]))
            editArr.addProduct && dispatch(setAddProduct(editArr.addProduct))
        }
    }, [editArr])

    return (
        <Box sx={{ width: '90%', marginLeft: '30px' }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Ավելացնել ապրանք</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={addProduct}
                    label="Ավելացնել ապրանք"
                    onChange={handleChange}
                >
                    <MenuItem value='Thermopess400 '>Thermopess400 </MenuItem>
                    <MenuItem value='Barbed Broaches'>Barbed Broaches</MenuItem>
                    <MenuItem value='Gates և Pesso '>Gates և Pesso </MenuItem>
                    <MenuItem value='ProFiles- Niti Tee, Niti Two Systems, Systems eS5'>ProFiles- Niti Tee, Niti Two Systems, Systems eS5</MenuItem>
                    <MenuItem value='Ֆայլեր'>Ֆայլեր</MenuItem>
                    <MenuItem value='Kromaltropic ալգինատ'>Kromaltropic ալգինատ</MenuItem>
                    <MenuItem value='Protesil Putty'>Protesil Putty</MenuItem>
                    <MenuItem value='Brillian B170-H170 '>Brillian B170-H170 </MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}