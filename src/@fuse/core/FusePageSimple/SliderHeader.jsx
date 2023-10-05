import clsx from 'clsx';
import style from './FusePageSimpleHeader.module.css'
import AddSlide from './AddSlide';
import { useEffect, useState } from 'react';
import { MdKeyboardDoubleArrowDown } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux';
import { GetSlider, setShowBox } from 'app/store/fuse/OptionsSlice';
import NavLinkAdapter from '../NavLinkAdapter/NavLinkAdapter';
import { Link } from 'react-router-dom';
function SliderHeader(props) {
    const slider = useSelector(state => state.slider.slider)
    const dispatch = useDispatch()
    const showBox = useSelector(state => state.slider.showBox)
    useEffect(() => {
        dispatch(GetSlider())
    }, [])
    return (
        <>
            <div style={{ height: '134px', background: 'white' }}>
                <div className="container" style={{ fontWeight: 800, fontSize: '2.4rem', display: 'flex', padding: '14px', gap: '6px' }}>
                    <MdKeyboardDoubleArrowDown style={{ fontSize: '33px' }} />
                    Սլայդեր
                    <div style={{ backgroundColor: ' rgb(189 189 189)', display: 'flex', alignItems: 'center', width: '74px', height: '23px', borderRadius: '5px', marginTop: '8px', justifyContent: 'space-evenly' }}>
                        <button><img src="https://api-dev-skamed.beeonco.de/images/default/flags/am.png" alt="am" width="20px" /></button>
                        <button><img src="https://api-dev-skamed.beeonco.de/images/default/flags/en.png" alt="en" width="20px" /></button>
                        <button><img src="https://api-dev-skamed.beeonco.de/images/default/flags/ru.png" alt="ru" width="20px" /></button>
                    </div>
                    <div className={style.line}></div>
                    <Link to="new">
                        <button className={style.addBtn}>
                            <span>+</span>
                            <span style={{ fontSize: '16px', lineHeight: '2.5vw' }}>Ավելացնել </span>
                        </button>
                    </Link>
                </div>
                <div style={{
                    backgroundColor: 'rgb(185, 185, 215)', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '18px', borderRadius: ' 11px 0 0'
                }}>
                    <p >Այստեղ կարող եք փոխել սլայդերի կարգավորումները և ավելացնել նոր սլայդեր</p>
                    <h1 style={{ color: 'red', fontSize: '18px', fontWeight: 800 }}>SOS</h1>
                </div>
            </div>
        </>
    )
}


export default SliderHeader;