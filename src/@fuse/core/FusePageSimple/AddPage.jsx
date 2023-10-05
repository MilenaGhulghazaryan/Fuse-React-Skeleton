import React, { useEffect, useState } from 'react';
import AddBtn from './AddBtn';
import style from './FusePageSimpleHeader.module.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Categories, { Pages, Products } from './Options';
import BtnStyle from './BtnStyle';
import { useDispatch, useSelector } from 'react-redux';
import { GetElementById, changeBtnTitle, setAddPage } from 'app/store/fuse/OptionsSlice';
import { useParams } from 'react-router-dom';

function AddPage() {
    const [btnStyle, setBtnStyle] = useState(false)
    const btnTitle = useSelector(state => state.slider.btnTitle)
    const dispatch = useDispatch()
    const addPage = useSelector(state => state.slider.addPage)
    const addCategory = useSelector(state => state.slider.addCategory)
    const addProduct = useSelector(state => state.slider.addProduct)
    const routeParams = useParams();
    let edit = routeParams.id != 'new'
    const editArr = useSelector(state => state.slider.editArr)
    console.log(editArr, 'edittt');
    useEffect(() => {
        edit && dispatch(GetElementById(routeParams.id))
    }, [routeParams.id])
    useEffect(() => {
        if (editArr) {
            editArr.btnTitle && dispatch(changeBtnTitle(editArr.btnTitle))
        }
    }, [editArr])

    const tabData = [
        {
            label: 'Ավելացնել էջ',
            content: <div>
                <Pages />
                <TextField id="outlined-basic" value={btnTitle} label="Կոճակի տեքստ" variant="outlined" style={{ width: '90%', marginLeft: '30px', marginTop: '19px' }} onChange={(e) => {
                    dispatch(changeBtnTitle(e.target.value))
                }} />
                <img src="https://api-dev-skamed.beeonco.de/images/default/flags/am.png" alt="am" width="20px" style={{
                    position: 'absolute', bottom: '100px', right: '36px'
                }} />
            </div>
        },
        {
            label: 'Ավելացնել Կատեգորիա',
            content:
                <div>
                    <Categories />
                    <TextField id="outlined-basic" value={btnTitle} label="Կոճակի տեքստ" variant="outlined" style={{ width: '90%', marginLeft: '30px', marginTop: '19px' }} onChange={(e) => {
                        dispatch(changeBtnTitle(e.target.value))
                    }} />
                    <img src="https://api-dev-skamed.beeonco.de/images/default/flags/am.png" alt="am" width="20px" style={{
                        position: 'absolute', bottom: '100px', right: '36px'
                    }} />
                </div>
        },
        {
            label: 'Ավելացնել Ապրանք',
            content: <div>
                <Products />
                <TextField id="outlined-basic" value={btnTitle} label="Կոճակի տեքստ" variant="outlined" style={{ width: '90%', marginLeft: '30px', marginTop: '19px' }} onChange={(e) => {
                    dispatch(changeBtnTitle(e.target.value))
                }} />
                <img src="https://api-dev-skamed.beeonco.de/images/default/flags/am.png" alt="am" width="20px" style={{
                    position: 'absolute', bottom: '100px', right: '36px'
                }} />
            </div>,
        },
    ];
    return (
        <div>
            <AddBtn tabs={tabData} />
            <button className={style.btnStyle} onClick={() => {
                setBtnStyle(!btnStyle)
            }}>Կոճակի ոճավորում</button>
            {
                btnStyle ? <BtnStyle /> : null
            }
        </div>
    );
}

export default AddPage;
