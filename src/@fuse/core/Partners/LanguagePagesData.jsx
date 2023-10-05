import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { GetElementById, changeBtnTitle, setAddPage, setStatus } from 'app/store/fuse/OptionsSlice';
import { Link, useParams } from 'react-router-dom';
import { EditPartnersDatas, GetPartnerById, GetPartners, setArmValue, setPartnersTitle, setRuValue, setUsValue } from 'app/store/fuse/PartnersSlice';
import { FiEdit } from 'react-icons/fi'
import LanguagePages from './LanguagesPages';
import { AiOutlineEye } from 'react-icons/ai'
import { AiOutlineEyeInvisible } from 'react-icons/ai'
import { Modal } from '@mui/material';
import { AiOutlineClose } from 'react-icons/ai'
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    height: '56px'
};
function LanguagePagesData() {
    const [btnStyle, setBtnStyle] = useState(false)
    const btnTitle = useSelector(state => state.slider.btnTitle)
    const dispatch = useDispatch()
    const [open, setOpen] = React.useState(false);
    const handleOpen = (img) => setOpen(img);
    const handleClose = () => setOpen(false);
    const routeParams = useParams();
    let edit = routeParams.id != 'new'
    const editArr = useSelector(state => state.slider.editArr)
    const [eye, setEye] = useState(false)
    const [eyeId, setEyeId] = useState(null)
    const partners = useSelector(state => state.partners.partners)
    const armValue = useSelector(state => state.partners.armValue)
    const usValue = useSelector(state => state.partners.usValue)
    const ruValue = useSelector(state => state.partners.ruValue)
    const [click, setClick] = useState(true)
    const [click2, setClick2] = useState(false)
    const [click3, setClick3] = useState(false)
    const status = useSelector(state => state.partners.status)
    const link = useSelector(state => state.partners.link)
    const editPartnerArr = useSelector(state => state.partners.editPartnerArr)
    let editPartner = routeParams.id != 'new'
    React.useEffect(() => {
        editPartner && dispatch(GetPartnerById(routeParams.id))
    }, [routeParams.id])

    React.useEffect(() => {
        if (editPartnerArr) {
            editPartnerArr.status && dispatch(EditPartnersDatas(editPartnerArr.status))
        }
    }, [editPartnerArr])

    const languagePagesData = [
        {
            label: <button><img src="https://api-dev-skamed.beeonco.de/images/default/flags/am.png" alt="am" width="20px" onClick={() => {
                setClick(true)
                setClick2(false)
                setClick3(false)
            }} style={{ background: click ? 'red' : null, padding: click ? '3px' : null }} /></button>,
            content:
                <div >
                    {
                        partners.map(({ id, armValue, link, images, status }) => {
                            console.log(status);
                            return (
                                <div>
                                    <div key={id} style={{ width: '93%', background: 'white', height: '76px', display: 'flex', alignItems: 'center', gap: '70%', justifyContent: 'space-around' }}>

                                        <div style={{ display: 'flex' }}>
                                            <AiOutlineEye style={{ position: 'absolute', fontSize: '20px', background: 'whitesmoke', borderRadius: '50%', color: 'black' }} onClick={() => handleOpen(images)} />
                                            <img src={images} alt="" width='40px' />
                                            <div>
                                                <p style={{ fontWeight: 600 }}>{armValue}</p>
                                                <p>{link}</p>
                                            </div>

                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '53px', alignItems: 'center' }}>
                                            {!status ? <AiOutlineEye style={{ fontSize: '23px', color: 'rgb(62, 63, 150)' }} onClick={() => {
                                                dispatch(EditPartnersDatas({
                                                    images: images,
                                                    armValue: armValue,
                                                    usValue: usValue,
                                                    ruValue: ruValue,
                                                    link: link,
                                                    status: !status,
                                                    id: id
                                                })).then(() => {
                                                    dispatch(GetPartners())
                                                })
                                            }} /> : <AiOutlineEyeInvisible style={{ fontSize: '23px', color: 'rgb(62, 63, 150)' }} onClick={() => {
                                                dispatch(EditPartnersDatas({
                                                    images: images,
                                                    armValue: armValue,
                                                    usValue: usValue,
                                                    ruValue: ruValue,
                                                    link: link,
                                                    status: !status,
                                                    id: id,

                                                })).then(() => {
                                                    dispatch(GetPartners())
                                                })
                                            }} />}
                                            <Link to={`${id}/edit`}>
                                                <FiEdit style={{ fontSize: '17px', color: 'rgb(62, 63, 150)' }} onClick={() => {
                                                    dispatch(GetPartnerById(id))
                                                }} />
                                            </Link>
                                        </div>
                                    </div>
                                    <div style={{ borderBottom: '1px solid', width: '93%' }}></div>
                                </div>
                            )
                        })
                    }
                </div>
        },
        {
            label: <button><img src="https://api-dev-skamed.beeonco.de/images/default/flags/en.png" alt="en" width="20px"
                onClick={() => {
                    setClick2(true)
                    setClick(false)
                    setClick3(false)
                }} style={{ background: click2 ? 'red' : null, padding: click2 ? '3px' : null }} /></button>,
            content:
                <div >
                    {
                        partners.map(({ id, usValue, link, images }) => {
                            return (
                                <div>
                                    <div key={id} style={{ width: '93%', background: 'white', height: '76px', display: 'flex', alignItems: 'center', gap: '70%', justifyContent: 'space-around' }}>

                                        <div style={{ display: 'flex' }}>
                                            <img src={images} alt="" width='40px' />
                                            <div>
                                                <p style={{ fontWeight: 600 }}>{usValue}</p>
                                                <p>{link}</p>
                                            </div>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '53px', alignItems: 'center' }}>
                                            <Link to={`${id}/edit`}>
                                                <FiEdit style={{ fontSize: '17px' }} onClick={() => {
                                                    dispatch(GetPartnerById(id))
                                                }} />
                                            </Link>
                                        </div>
                                    </div>
                                    <div style={{ borderBottom: '1px solid', width: '93%' }}></div>
                                </div>
                            )
                        })
                    }
                </div>
        },
        {
            label: <button><img src="https://api-dev-skamed.beeonco.de/images/default/flags/ru.png" alt="ru" width="20px" onClick={() => {
                setClick3(true)
                setClick2(false)
                setClick(false)
            }} style={{ background: click3 ? "red" : "blue", padding: click3 ? '3px' : null }} /></button>,
            content: <div >
                {
                    partners.map(({ id, ruValue, link, images }) => {
                        return (
                            <div>
                                <div key={id} style={{ width: '93%', background: 'white', height: '76px', display: 'flex', alignItems: 'center', gap: '70%', justifyContent: 'space-around' }}>
                                    <div style={{ display: 'flex' }}>
                                        <img src={images} alt="" width='40px' />
                                        <div>
                                            <p style={{ fontWeight: 600 }}>{ruValue}</p>
                                            <p>{link}</p>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '53px', alignItems: 'center' }}>
                                        <Link to={`${id}/edit`}>
                                            <FiEdit style={{ fontSize: '17px' }} onClick={() => {
                                                dispatch(GetPartnerById(id))
                                            }} />
                                        </Link>
                                    </div>
                                </div>
                                <div style={{ borderBottom: '1px solid', width: '93%' }}></div>
                            </div>
                        )
                    })
                }
            </div>
        }
    ];
    return (
        <div>
            <LanguagePages tabs={languagePagesData} />
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: ' -17px', alignItems: 'center' }}>
                        <img src={open} alt="" width='40px' />
                        <AiOutlineClose style={{ fontSize: '21px', color: 'red' }} onClick={handleClose} />
                    </div>
                </Box>
            </Modal>
        </div>
    );
}

export default LanguagePagesData;
