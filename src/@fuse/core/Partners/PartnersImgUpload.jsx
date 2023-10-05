import { GetPartnerById, changeImages } from 'app/store/fuse/PartnersSlice';
import React, { useEffect } from 'react';
import { AiOutlineCamera } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AiOutlineEye } from 'react-icons/ai'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { AiOutlineClose } from 'react-icons/ai'
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '38%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    height: '40px'
};
const PartnersImgUpload = () => {
    const dispatch = useDispatch()
    const images = useSelector(state => state.partners.images)

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            dispatch(changeImages(URL.createObjectURL(selectedFile)));
        }
    };

    const routeParams = useParams();
    let editPartner = routeParams.id != 'new'
    const editPartnerArr = useSelector(state => state.partners.editPartnerArr)

    useEffect(() => {
        editPartner && dispatch(GetPartnerById(routeParams.id))
    }, [routeParams.id])

    useEffect(() => {
        if (editPartnerArr) {
            editPartnerArr.images && dispatch(changeImages(editPartnerArr.images))
        }
    }, [editPartnerArr])

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (

        <>
            <div style={{ display: 'flex' }}>
                <input
                    type="file"
                    accept=".png,.svg,.jpg"
                    onChange={handleFileChange}
                    style={{ display: 'none' }}
                    id="fileInput"
                />
                <label htmlFor="fileInput">
                    <AiOutlineCamera style={{ fontSize: '27px', color: 'white', position: 'absolute', zIndex: 2, left: '49px', bottom: '41px' }} />
                </label>
                {
                    images && (
                        <>
                            <img src={images} alt="" style={{
                                width: '87px',
                                position: 'absolute',
                                top: '1px',
                                left: '15px'
                            }} />
                        </>
                    )
                }
                {
                    images.length !== 0 ? <AiOutlineEye onClick={handleOpen} style={{ fontSize: '25px', background: 'white', position: 'absolute', top: '2px', left: '1px', borderRadius: '5px', height: '25px' }} /> : null
                }
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '-19px' }}>
                        <img src={images} alt="" width='40px' />
                        <AiOutlineClose style={{ fontSize: '21px', color: 'red' }} onClick={handleClose} />
                    </div>
                </Box>
            </Modal>
        </>
    );
}
export default PartnersImgUpload






