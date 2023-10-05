import { useForm } from "react-hook-form";
import { MdKeyboardDoubleArrowLeft } from 'react-icons/md'
import { AiOutlineClose } from 'react-icons/ai'
import { style } from "@mui/system";
import styles from './Partners.module.css'
import { AiOutlineCamera } from 'react-icons/ai'
import PartnersImgUpload from "./PartnersImgUpload";
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link, useParams } from "react-router-dom";
import PartnersFooter from "./PartnersFooter";
import { useDispatch, useSelector } from "react-redux";
import { setStatus, setTitle } from "app/store/fuse/OptionsSlice";
import { GetPartnerById, GetPartners, setArmValue, setArmenia, setLink, setPartnersTitle, setRuValue, setUsValue } from "app/store/fuse/PartnersSlice";
import AddLanguageData from "./LanguageData";
import LanguageData from "./LanguageData";
export default function AddPartners() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const dispatch = useDispatch()
    const link = useSelector(state => state.partners.link)
    const partnersTitle = useSelector(state => state.partners.partnersTitle)
    const armenia = useSelector(state => state.partners.armenia)
    const routeParams = useParams();
    let editPartner = routeParams.id != 'new'
    const armValue = useSelector(state => state.partners.armValue)
    const usValue = useSelector(state => state.partners.usValue)
    const ruValue = useSelector(state => state.partners.ruValue)
    const status = useSelector(state => state.partners.status)
    const editPartnerArr = useSelector(state => state.partners.editPartnerArr)
    React.useEffect(() => {
        dispatch(GetPartners())
    }, [])

    React.useEffect(() => {
        editPartner && dispatch(GetPartnerById(routeParams.id))
    }, [routeParams.id])
    React.useEffect(() => {
        if (editPartnerArr) {
            editPartnerArr.armValue && dispatch(setArmValue(editPartnerArr.armValue))
            editPartnerArr.usValue && dispatch(setUsValue(editPartnerArr.usValue))
            editPartnerArr.ruValue && dispatch(setRuValue(editPartnerArr.ruValue))
            editPartnerArr.link && dispatch(setLink(editPartnerArr.link))
        }
    }, [editPartnerArr])
    console.log(editPartnerArr, 'editpartnerArr');
    return (
        <>
            <div className={styles.box}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px', height: '118px', background: 'rgb(185, 185, 215)' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <MdKeyboardDoubleArrowLeft style={{ fontSize: '26px', color: 'dimgray' }} />
                        <p>Գործընկերներ  | Ավելացնել</p>
                    </div>
                    <Link to="/pages/partners">
                        <AiOutlineClose style={{ fontSize: '26px', color: 'dimgray', cursor: 'pointer' }} onClick={() => {
                            dispatch(setPartnersTitle(''))
                            dispatch(setLink(''))
                            dispatch(changeImages([]))
                        }} />
                    </Link>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <div className={styles.boxImg}>
                        <PartnersImgUpload />
                    </div>

                    <LanguageData />
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Box style={{ width: '457px', marginLeft: '17px' }}
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '90%' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="outlined-basic" label="Հղում" value={link} variant="outlined" onChange={(e) => {
                            dispatch(setLink(e.target.value))
                        }} />
                    </Box>
                </form>
            </div>
            <PartnersFooter />
        </>

    );
}
