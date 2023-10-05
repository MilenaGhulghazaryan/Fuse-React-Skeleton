// import style from './FusePageSimpleHeader.module.css'
// import TextField from '@mui/material/TextField';
// import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
// import { IoMdArrowDropdown } from 'react-icons/io';
// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { GetElementById, setBtnColor, setBtnTitleColor, setColorBtn, setColors, setTitle } from 'app/store/fuse/OptionsSlice';
// import { useParams } from 'react-router-dom';

// const filterOptions = createFilterOptions({
//     matchFrom: 'start',
//     stringify: (option) => option,
// });

// export default function BtnStyle() {
//     const dispatch = useDispatch()
//     const [colorsBox, setColorsBox] = useState(false)
//     const [colorsBox2, setColorsBox2] = useState(false)
//     const colors = useSelector(state => state.slider.colors)
//     const colorBtn = useSelector(state => state.slider.colorBtn)
//     console.log(colors, 'colors');
//     const [colorDiv, setColorDiv] = useState(false)
//     const [colorDiv2, setColorDiv2] = useState(false)
//     const colorsArr = [
//         'rgb(201, 41, 7)',
//         'rgb(255, 106, 106)',
//         'rgb(22, 120, 197',
//         'rgb(51, 143, 209)',
//         'rgb(175, 205, 228)',
//         'rgb(205, 229, 229)',
//         'rgb(255, 165, 2)',
//         'rgb(255, 204, 0)',
//         'rgb(255, 204, 0)',
//         'rgb(247, 220, 111)',
//         'rgb(252, 243, 207)',
//         'rgb(29, 131, 72)',
//         'rgb(40, 180, 99)',
//         'rgb(46, 204, 113)',
//         'rgb(130, 224, 170)',
//         'rgb(171, 235, 198)',
//         'rgb(17, 146, 68)',
//         'rgb(60, 123, 0)',
//         'rgb(106, 198, 16)',
//         'rgb(121, 226, 18)',
//         'rgb(105, 175, 36)',
//         'rgb(0, 0, 0)',
//         'rgb(108, 117, 125)',
//         'rgb(153, 153, 153)',
//         'rgb(255, 255, 255)',
//         'rgb(13, 15, 90)',
//         'rgb(47, 49, 146)',
//         'rgb(95, 97, 188)',
//         'rgb(99, 121, 180)',
//         'rgb(205, 229, 229)'

//     ]

//     const { title } = useSelector(state => state.slider)
//     const btnColor = useSelector(state => state.slider.btnColor)
//     const routeParams = useParams()
//     let edit = routeParams.id != 'new'
//     const editArr = useSelector(state => state.slider.editArr)
//     console.log(editArr, 'edittt');

//     useEffect(() => {
//         edit && dispatch(GetElementById(routeParams.id))
//     }, [routeParams.id])
//     useEffect(() => {
//         if (editArr) {
//             editArr.title && dispatch(setTitle(editArr.title))
//             editArr.colors && dispatch(setColors(editArr.colors))
//         }
//     }, [editArr])
//     return (
//         <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '21px' }}>
//             <div style={{ display: 'flex', width: '97%', marginLeft: '-4px' }}>
//                 <div className={style.inputContainer}>
//                     <TextField id="outlined-basic" label="Տեքստի գույնը" disabled style={{ width: '90%', marginLeft: '30px' }} className={style.inputField} onChange={() => {
//                         dispatch(setBtnTitleColor(colors))
//                     }} />
//                     <IoMdArrowDropdown className={style.inputIcon} onClick={() => {
//                         setColorsBox(!colorsBox)
//                         setColorsBox2(false)
//                     }} />
//                 </div>
//                 <div className={style.inputContainer}>
//                     <TextField id="outlined-basic" value={btnColor} label="Կոճակի գույնը" variant="outlined" disabled style={{ width: '90%', marginLeft: '30px' }} className={style.inputField} onClick={() => {
//                         dispatch(setBtnColor(colorBtn))
//                     }} />
//                     <IoMdArrowDropdown className={style.inputIcon} onClick={() => {
//                         setColorsBox2(!colorsBox2)
//                         setColorsBox(false)
//                     }}
//                     />
//                 </div>
//             </div>

//             {
//                 colorsBox ? <div className={style.colorsBox}>
//                     {
//                         colorsArr.map((color, index) => (
//                             <div key={index} style={{
//                                 backgroundColor: color,
//                                 width: '69.7px',
//                                 height: '30px',
//                                 border: '1px solid'
//                             }} onClick={() => {
//                                 dispatch(setColors({
//                                     index, color
//                                 }))
//                                 setColorDiv(!colorDiv)
//                                 setColorsBox(false)
//                             }}>{index + 1}</div>
//                         )
//                         )
//                     }
//                 </div> : null
//             }
//             {
//                 colorsBox2 ? <div className={style.colorsBox} style={{ marginLeft: '130px' }}>
//                     {
//                         colorsArr.map((color, index) => (
//                             <div key={index} style={{
//                                 backgroundColor: color,
//                                 width: '69.7px',
//                                 height: '30px',
//                                 border: '1px solid'
//                             }} onClick={() => {
//                                 dispatch(setColorBtn({
//                                     index, color
//                                 }))
//                                 setColorDiv2(true)
//                                 setColorsBox2(false)
//                             }}>{index + 1}</div>
//                         )
//                         )
//                     }
//                 </div> : null
//             }

//             {
//                 colorDiv ? <div style={{ background: colors?.color }} className={style.colorDiv}>{colors?.index + 1}</div> : null
//             }
//             {
//                 !colorDiv && editArr ? <div style={{ background: editArr.colors, width: '160px' }} className={style.colorDiv}>{editArr.colorBtnIndex}</div> : null
//             }
//             {
//                 colorDiv2 ? <div style={{ background: colorBtn?.color }} className={style.colorDiv2}>{colorBtn?.index + 1}</div> : null
//             }
//             {
//                 !colorDiv2 && editArr ? <div style={{ background: editArr.colorBtn, width: '160px' }} className={style.colorDiv2}>{editArr.colorsIndex}</div> : null
//             }
//             <TextField id="outlined-basic" value={title} label="Վերնագիր" variant="outlined" style={{ width: '90%', marginLeft: '30px' }} onChange={(e) => {
//                 dispatch(setTitle(e.target.value))
//             }} />
//         </div>
//     );
// }



import style from './FusePageSimpleHeader.module.css'
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { IoMdArrowDropdown } from 'react-icons/io';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetElementById, setBtnColor, setBtnTitleColor, setColorBtn, setColors, setTitle } from 'app/store/fuse/OptionsSlice';
import { useParams } from 'react-router-dom';

const filterOptions = createFilterOptions({
    matchFrom: 'start',
    stringify: (option) => option,
});

export default function BtnStyle() {
    const dispatch = useDispatch()
    const [colorsBox, setColorsBox] = useState(false)
    const [colorsBox2, setColorsBox2] = useState(false)
    const colors = useSelector(state => state.slider.colors)
    const colorBtn = useSelector(state => state.slider.colorBtn)
    console.log(colors, 'colors');
    const [colorDiv, setColorDiv] = useState(false)
    const [colorDiv2, setColorDiv2] = useState(false)
    const colorsArr = [
        'rgb(201, 41, 7)',
        'rgb(255, 106, 106)',
        'rgb(22, 120, 197',
        'rgb(51, 143, 209)',
        'rgb(175, 205, 228)',
        'rgb(205, 229, 229)',
        'rgb(255, 165, 2)',
        'rgb(255, 204, 0)',
        'rgb(255, 204, 0)',
        'rgb(247, 220, 111)',
        'rgb(252, 243, 207)',
        'rgb(29, 131, 72)',
        'rgb(40, 180, 99)',
        'rgb(46, 204, 113)',
        'rgb(130, 224, 170)',
        'rgb(171, 235, 198)',
        'rgb(17, 146, 68)',
        'rgb(60, 123, 0)',
        'rgb(106, 198, 16)',
        'rgb(121, 226, 18)',
        'rgb(105, 175, 36)',
        'rgb(0, 0, 0)',
        'rgb(108, 117, 125)',
        'rgb(153, 153, 153)',
        'rgb(255, 255, 255)',
        'rgb(13, 15, 90)',
        'rgb(47, 49, 146)',
        'rgb(95, 97, 188)',
        'rgb(99, 121, 180)',
        'rgb(205, 229, 229)'

    ]

    const { title } = useSelector(state => state.slider)
    const btnColor = useSelector(state => state.slider.btnColor)
    const routeParams = useParams()
    let edit = routeParams.id != 'new'
    const editArr = useSelector(state => state.slider.editArr)
    console.log(editArr, 'edittt');
   const slider = useSelector(state=>state.slider)
    useEffect(() => {
        edit && dispatch(GetElementById(routeParams.id))
    }, [routeParams.id])
    useEffect(() => {
        if (editArr) {
            editArr.title && dispatch(setTitle(editArr.title))

            // editArr.colors && dispatch(setColors(editArr.colors))
            // editArr.colorBtn && dispatch(setColorBtn(editArr.colorBtn))
            // editArr.colorBtnIndex && dispatch(setColorBtn(editArr.colorBtnIndex))
            // editArr.colorsIndex && dispatch(setColors(editArr.colorsIndex))
        }
    }, [editArr])
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '21px' }}>
            <div style={{ display: 'flex', width: '97%', marginLeft: '-4px' }}>
                <div className={style.inputContainer}>
                    <TextField id="outlined-basic" label="Տեքստի գույնը" disabled style={{ width: '90%', marginLeft: '30px' }} className={style.inputField} onChange={() => {
                        dispatch(setBtnTitleColor(colors))
                    }} />
                    <IoMdArrowDropdown className={style.inputIcon} onClick={() => {
                        setColorsBox(!colorsBox)
                        setColorsBox2(false)
                    }} />
                </div>
                <div className={style.inputContainer}>
                    <TextField id="outlined-basic" value={btnColor} label="Կոճակի գույնը" variant="outlined" disabled style={{ width: '90%', marginLeft: '30px' }} className={style.inputField} onClick={() => {
                        dispatch(setBtnColor(colorBtn))
                    }} />
                    <IoMdArrowDropdown className={style.inputIcon} onClick={() => {
                        setColorsBox2(!colorsBox2)
                        setColorsBox(false)
                    }}
                    />
                </div>
            </div>

            {
                colorsBox ? <div className={style.colorsBox}>
                    {
                        colorsArr.map((color, index) => (
                            <div key={index} style={{
                                backgroundColor: color,
                                width: '69.7px',
                                height: '30px',
                                border: '1px solid'
                            }} onClick={() => {
                                dispatch(setColors({
                                    index, color
                                }))
                                // setColorDiv(!colorDiv)
                                setColorDiv(true)
                                setColorsBox(false)
                            }}>{index + 1}</div>
                        )
                        )
                    }
                </div> : null
            }
            {
                colorsBox2 ? <div className={style.colorsBox} style={{ marginLeft: '130px' }}>
                    {
                        colorsArr.map((color, index) => (
                            <div key={index} style={{
                                backgroundColor: color,
                                width: '69.7px',
                                height: '30px',
                                border: '1px solid'
                            }} onClick={() => {
                                dispatch(setColorBtn({
                                    index, color
                                }))
                                setColorDiv2(true)
                                setColorsBox2(false)
                            }}>{index + 1}</div>
                        )
                        )
                    }
                </div> : null
            }

            {
                colorDiv  ? <div style={{ background: colors?.color }} className={style.colorDiv}>{colors?.index + 1}</div> : null
            }
            {
                editArr  ? <div style={{ background: colorDiv ? colors?.color : editArr.colors, width: '160px' }} className={style.colorDiv}>{editArr.colorBtnIndex}</div> : null
            }
            {
                colorDiv2  ? <div style={{ background: colorBtn?.color }} className={style.colorDiv2}>{colorBtn?.index + 1}</div> : null
            }
            {
                editArr ? <div style={{ background: colorDiv2 ? colorBtn?.color : editArr.colorBtn, width: '160px' }} className={style.colorDiv2}>{editArr.colorsIndex}</div> : null
            }
            <TextField id="outlined-basic" value={title} label="Վերնագիր" variant="outlined" style={{ width: '90%', marginLeft: '30px' }} onChange={(e) => {
                dispatch(setTitle(e.target.value))
            }} />
        </div>
    );
}



