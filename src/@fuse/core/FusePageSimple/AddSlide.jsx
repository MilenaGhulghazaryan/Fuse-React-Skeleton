import style from './FusePageSimpleHeader.module.css'
import { RiDeleteBin6Fill } from 'react-icons/ri'
import { MdKeyboardDoubleArrowLeft } from 'react-icons/md'
import ImageUpload from './ImageUpload'
import { useEffect, useState } from 'react'
import AddPage from './AddPage'
import { AiOutlineClose } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { GetElementById, GetSlider, addPages, changeBtnTitle, setAddCategory, setAddPage, setAddProduct, setColorBtn, setImages, setShowBox, setTitle } from 'app/store/fuse/OptionsSlice'
import { Link, useParams, useRoutes, useSearchParams } from 'react-router-dom'
import SliderFooter from './SliderFooter'
const AddSlide = () => {
    const dispatch = useDispatch()
    const images = useSelector(state => state.slider.images)
    const routeParams = useParams();

    let edit = routeParams.id != 'new'
    const [showOptions, setShowOptions] = useState(false)
    const { addPage, btnTitle, addCategory, addProduct, title, colors, colorBtn } = useSelector(state => state.slider)
    const editArr = useSelector(state => state.slider.editArr)
    useEffect(() => {
        dispatch(GetSlider())
    }, [])

    useEffect(() => {
        edit && dispatch(GetElementById(routeParams.id))
        if (edit) {
            if (editArr) {

            }
        }
    }, [edit])

    return (
        <>

            <div className={style.box}>
                <div style={{ display: 'flex', justifyContent: 'space-around', gap: '53%', alignItems: 'center', padding: '24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <MdKeyboardDoubleArrowLeft style={{ fontSize: '26px', color: 'dimgray' }} />
                        <p>Սլայդեր | Ավելացնել</p>
                    </div>
                    <Link to="/pages/slider">
                        <AiOutlineClose style={{ fontSize: '26px', color: 'dimgray', cursor: 'pointer' }} onClick={() => {
                            dispatch(GetSlider())
                            dispatch(setImages([]))
                            dispatch(setAddPage(''))
                            dispatch(changeBtnTitle(''))
                            dispatch(setAddCategory(''))
                            dispatch(setAddProduct(''))
                            dispatch(setTitle(''))
                            dispatch(setColorBtn({
                                index: '',
                                color: ''
                            }))
                        }} />
                    </Link>
                </div>
                <div >
                    <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
                        <div style={{ backgroundColor: ' rgb(189 189 189)', display: 'flex', alignItems: 'center', width: '74px', height: '23px', borderRadius: '5px', marginTop: '8px', justifyContent: 'space-evenly' }}>
                            <button><img src="https://api-dev-skamed.beeonco.de/images/default/flags/am.png" alt="am" width="20px" /></button>
                            <button><img src="https://api-dev-skamed.beeonco.de/images/default/flags/en.png" alt="en" width="20px" /></button>
                            <button><img src="https://api-dev-skamed.beeonco.de/images/default/flags/ru.png" alt="ru" width="20px" /></button>
                        </div>
                        <div style={{ borderBottom: '1px solid black' }}></div>
                    </div>
                    <div className={style.grayBox}>
                        <ImageUpload />
                        <RiDeleteBin6Fill style={{ fontSize: '24px', color: 'white', marginLeft: '42px', position: 'absolute' }} onClick={() => {
                            dispatch(setImages([]))
                        }} />
                    </div>
                    <button className={style.add} onClick={() => {
                        setShowOptions(!showOptions)
                    }}>Ավելացնել կոճակ</button>

                    {
                        showOptions ? <AddPage /> : null
                    }

                </div>
                {/* <Link to="/pages/slider">
                    <button style={{
                        marginTop: '140px',
                        marginLeft: '80%',
                        width: '100px',
                        height: '43px',
                        background: 'rgb(62, 63, 150)',
                        color: ' white',
                        borderRadius: '20px'
                    }} onClick={() => {
                        dispatch(addPages({
                            img: images,
                            pageTitle: addPage,
                            btnTitle: btnTitle,
                            addCategory: addCategory,
                            addProduct: addProduct,
                            title: title,
                            colors: colors.color,
                            colorBtn: colorBtn.color
                        })).then(() => {
                            dispatch(GetSlider())
                        })
                    }}>Պահպանել</button>
                </Link> */}
              
            </div>
            <SliderFooter/>
            <div></div>
        </>
    )
}
export default AddSlide




















































