import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { GetElementById, changeBtnTitle, setAddPage } from 'app/store/fuse/OptionsSlice';
import { useParams } from 'react-router-dom';
import { setArmValue, setPartnersTitle, setRuValue, setUsValue } from 'app/store/fuse/PartnersSlice';
import AddLanguageData from './AddLanguageData';

function LanguageData() {
    const [btnStyle, setBtnStyle] = useState(false)
    const btnTitle = useSelector(state => state.slider.btnTitle)
    const dispatch = useDispatch()
    const routeParams = useParams();
    let edit = routeParams.id != 'new'
    const editArr = useSelector(state => state.slider.editArr)
    const armValue = useSelector(state => state.partners.armValue)
    const usValue = useSelector(state => state.partners.usValue)
    const ruValue = useSelector(state => state.partners.ruValue)
    const [click, setClick] = useState(true)
    const [click2, setClick2] = useState(false)
    const [click3, setClick3] = useState(false)
    const languageData = [
        {
            label: <img src="https://api-dev-skamed.beeonco.de/images/default/flags/am.png" alt="am" width="20px" onClick={() => {
                setClick(true)
                setClick2(false)
                setClick3(false)
            }} style={{ background: click ? 'red' : null, padding: click ? '3px' : null, marginLeft: '300px' }} />,

            content:
                <div >
                    <Box style={{ marginTop: '108px', width: '457px' }}
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '90%' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="outlined-basic" label="Գործընկերներ" value={armValue} variant="outlined" onChange={(e) => {
                            dispatch(setArmValue(e.target.value))
                        }} />
                    </Box>
                </div>
        },
        {
            label: <img src="https://api-dev-skamed.beeonco.de/images/default/flags/en.png" alt="en" width="20px" onClick={() => {
                setClick(false)
                setClick2(true)
                setClick3(false)
            }} style={{ background: click2 ? 'red' : null, padding: click2 ? '3px' : null }} />,
            content:
                <div>
                    <Box style={{ marginTop: '108px', width: '457px' }}
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '90%' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="outlined-basic" label="Գործընկերներ" value={usValue} variant="outlined"
                            onChange={(e) => {
                                dispatch(setUsValue(e.target.value))
                            }}
                        />
                    </Box>
                </div>
        },
        {
            label: <img src="https://api-dev-skamed.beeonco.de/images/default/flags/ru.png" alt="ru" width="20px" onClick={() => {
                setClick(false)
                setClick2(false)
                setClick3(true)
            }} style={{ background: click3 ? 'red' : null, padding: click3 ? '3px' : null }} />,
            content: <div>
                <Box style={{ marginTop: '108px', width: '457px' }}
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '90%' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="outlined-basic" label="Գործընկերներ" value={ruValue} variant="outlined" onChange={(e) => {
                        dispatch(setRuValue(e.target.value))
                    }} />
                </Box>
            </div>,
        },
    ];
    return (
        <div>
            <AddLanguageData tabs={languageData} />
        </div>
    );
}

export default LanguageData;
