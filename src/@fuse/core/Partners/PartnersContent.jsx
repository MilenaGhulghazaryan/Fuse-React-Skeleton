import { useDispatch, useSelector } from "react-redux"
import { FiEdit } from 'react-icons/fi'
import { AiOutlineEye } from 'react-icons/ai'
import { AiOutlineEyeInvisible } from 'react-icons/ai'
import { useState } from "react"
import { Link } from "react-router-dom"
import { GetPartnerById } from "app/store/fuse/PartnersSlice"
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { AiOutlineClose } from 'react-icons/ai'
import LanguagePagesData from "./LanguagePagesData"
import ChangeLanguageFunction from "./ChangeLanguageFunction"
import { useTranslation } from "react-i18next"
import i18n from "src/i18n"
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

const PartnersContent = () => {
    const partners = useSelector(state => state.partners.partners)
    const dispatch = useDispatch()
    const [eye, setEye] = useState(false)
    const [eyeId, setEyeId] = useState(null)
    const [open, setOpen] = React.useState(false);
    const handleOpen = (img) => setOpen(img);
    const handleClose = () => setOpen(false);
    const { t } = useTranslation()

    return (
        <>
            <div style={{ margin: '26px' }}>
                <LanguagePagesData />
            </div>
        </>
    )
}
export default PartnersContent