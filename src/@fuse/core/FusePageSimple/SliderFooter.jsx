import { useDispatch, useSelector } from 'react-redux';
import FuseScrollbars from '@fuse/core/FuseScrollbars';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import { selectContrastMainTheme } from 'app/store/fuse/settingsSlice';
import clsx from 'clsx';
import { Link, useParams } from 'react-router-dom';
import { DeleteDatas, EditDatas, GetElementById, GetSlider, addPages, changeBtnTitle, setAddCategory, setAddPage, setAddProduct, setColorBtn, setColors, setImages, setTitle } from 'app/store/fuse/OptionsSlice';
import { useEffect, useState } from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { color } from '@mui/system';

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
const SliderFooter = ()=> {
    const theme = useTheme();
  const contrastTheme = useSelector(selectContrastMainTheme(theme.palette.primary.main));
  const dispatch = useDispatch()
  const images = useSelector(state => state.slider.images)
  const editArr = useSelector(state => state.slider.editArr)
  const routeParams = useParams();
  let edit = routeParams.id != 'new'
  useEffect(() => {
    edit && dispatch(GetElementById(routeParams.id))
  }, [edit])

  const { addPage, btnTitle, addCategory, addProduct, title, colors, colorBtn } = useSelector(state => state.slider)

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [del, setDel] = useState(false)


  useEffect(() => {
    dispatch(GetSlider())
  }, [del])

  const styleBtn = {
    marginTop: '9px',
    marginLeft: '80%',
    width: '100px',
    height: '43px',
    background: images.length !== 0 ? 'rgb(62, 63, 150)' : 'rgba(0, 0, 0, 0.12)',
    color: images.length !== 0 ? 'white' : 'rgba(0, 0, 0, 0.26)',
    borderRadius: '20px'
  }

    return(
        <div>
        <div style={{ display: 'flex', marginLeft: '29px', gap: '194px', alignItems: 'center' }}>

        <Button onClick={handleOpen} style={{ color: 'rgb(244, 67, 54)', fontWeight: 'inherit' }}>Ջնջել</Button>
        {
          editArr ?
            <Link to="/pages/slider">
              <button
                style={styleBtn}

               
                onClick={() => {
                  dispatch(EditDatas({
                    img: images || editArr.images,
                    pageTitle: addPage,
                    btnTitle: btnTitle,
                    addCategory: addCategory,
                    addProduct: addProduct,
                    title: title,
                    colors: colors.color || editArr.colors,
                    colorsIndex: colors.index,
                    colorBtn: colorBtn.color || editArr.colorBtn,
                    colorBtnIndex: colorBtn.index,
                    id: routeParams.id
                  })).then(() => {
                    dispatch(GetSlider())
                    dispatch(setImages([]))
                    dispatch(setAddPage(''))
                    dispatch(changeBtnTitle(''))
                    dispatch(setAddCategory(''))
                    dispatch(setAddProduct(''))
                    dispatch(setTitle(''))

               

                  })
                }}>Պահպանել</button>
            </Link> : <Link to="/pages/slider">
              <button style={styleBtn}
               
                onClick={() => {
                  // if(addPage.trim() && images.length !== 0 && btnTitle.trim() && addCategory.trim() && addProduct.trim() && title.trim()){
                  dispatch(addPages({
                    img: images,
                    pageTitle: addPage,
                    btnTitle: btnTitle,
                    addCategory: addCategory,
                    addProduct: addProduct,
                    title: title,
                    colors: colors.color,
                    colorsIndex: colors.index,
                    colorBtn: colorBtn.color,
                    colorBtnIndex: colorBtn.index
                  })).then(() => {
                    dispatch(GetSlider())
                    dispatch(setImages([]))
                    dispatch(setAddPage(''))
                    dispatch(changeBtnTitle(''))
                    dispatch(setAddCategory(''))
                    dispatch(setAddProduct(''))
                    dispatch(setTitle(''))
                    
                  })
                  // }
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
          <Link to="/pages/slider">
            <Button
              style={{
                width: '40px',
                height: '40px',
                color: 'rgb(244, 67, 54)',
                border: '1px solid rgba(244, 67, 54, 0.5)'
              }}

              onClick={() => {
                dispatch(DeleteDatas({
                  img: images,
                  pageTitle: addPage,
                  btnTitle: btnTitle,
                  addCategory: addCategory,
                  addProduct: addProduct,
                  title: title,
                  colors: colors.color,
                  colorsIndex: colors.index,
                  colorBtn: colorBtn.color,
                  colorBtnIndex: colorBtn.index,
                  id: routeParams.id
                })).then(() => {
                  GetSlider()
                  handleClose()
                  setDel(!del)
                })
              }}> Այո</Button>
          </Link>
        </div>
      </Box>
    </Modal>
    </div>
    )
}
export default SliderFooter