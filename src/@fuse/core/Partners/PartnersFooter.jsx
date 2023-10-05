import { DeletePartnerDatas, EditPartnersDatas, GetPartners, addPartners, changeImages, setArmValue, setLink, setPartnersTitle, setRuValue, setUsValue } from "app/store/fuse/PartnersSlice"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { color } from '@mui/system';
import { useEffect } from "react"

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const PartnersFooter = () => {
    const dispatch = useDispatch()

    const link = useSelector(state => state.partners.link)
    const partnersTitle = useSelector(state => state.partners.partnersTitle)
    const partners = useSelector(state => state.partners.partners)
    const images = useSelector(state => state.partners.images)
    const editPartnerArr = useSelector(state => state.partners.editPartnerArr)
    const armValue = useSelector(state => state.partners.armValue)
    const usValue = useSelector(state => state.partners.usValue)
    const ruValue = useSelector(state => state.partners.ruValue)
    const status = useSelector(state => state.partners.status)
    console.log(status, 'stat');

    const routeParams = useParams();

    let editPartner = routeParams.id != 'new'

    const styleBtn = {
        marginTop: '9px',
        marginLeft: '75%',
        width: '100px',
        height: '43px',
        background: link ? 'rgb(62, 63, 150)' : 'rgba(0, 0, 0, 0.12)',
        color: link ? 'white' : 'rgba(0, 0, 0, 0.26)',
        borderRadius: '20px'
    }
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [del, setDel] = React.useState(false)
    useEffect(() => {
        dispatch(GetPartners())
    }, [del])
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '80%' }}>
                <Button onClick={handleOpen} style={{ color: 'rgb(244, 67, 54)', fontWeight: 'inherit' }}>Ջնջել</Button>
                {
                    !editPartnerArr ?
                        <Link to="/pages/partners">
                            <button style={styleBtn} onClick={() => {
                                dispatch(addPartners({
                                    images: images,
                                    link: link,
                                    armValue: armValue,
                                    usValue: usValue,
                                    ruValue: ruValue,
                                    status: status

                                })).then(() => {
                                    dispatch(GetPartners())
                                    dispatch(setArmValue(''))
                                    dispatch(setUsValue(''))
                                    dispatch(setRuValue(''))
                                    dispatch(setLink(''))
                                    dispatch(changeImages([]))
                                })
                            }}>Պահպանել</button>
                        </Link> : <Link to="/pages/partners">
                            <button style={styleBtn} onClick={() => {
                                dispatch(EditPartnersDatas({
                                    images: images,
                                    armValue: armValue,
                                    usValue: usValue,
                                    ruValue: ruValue,
                                    link: link,
                                    id: routeParams.id,
                                    status: status

                                })).then(() => {
                                    dispatch(GetPartners())
                                    dispatch(setArmValue(''))
                                    dispatch(setUsValue(''))
                                    dispatch(setRuValue(''))
                                    dispatch(setLink(''))
                                    dispatch(changeImages([]))
                                })
                            }}>Պահպանել</button>
                        </Link>
                }
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" style={{ fontSize: '15px', textAlign: 'center' }}>
                        Վստահ եք,որ ուզում եք ջնջել
                    </Typography>
                    <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '15px' }}>
                        <Button style={{
                            width: '40px',
                            height: '40px',
                            backgroundColor: 'rgb(62, 63, 150)',
                            color: 'white'
                        }} onClick={() => {
                            handleClose()
                        }}>Ոչ</Button>
                        <Link to="/pages/partners">
                            <Button
                                style={{
                                    width: '40px',
                                    height: '40px',
                                    color: 'rgb(244, 67, 54)',
                                    border: '1px solid rgba(244, 67, 54, 0.5)'
                                }}

                                onClick={() => {
                                    dispatch(DeletePartnerDatas({
                                        images: images,
                                        partnersTitle: partnersTitle,
                                        link: link,
                                        id: routeParams.id
                                    })).then(() => {
                                        dispatch(GetPartners())
                                        handleClose()
                                        setDel(!del)
                                    })
                                }}> Այո</Button>
                        </Link>
                    </div>
                </Box>
            </Modal>
        </>
    )
}
export default PartnersFooter