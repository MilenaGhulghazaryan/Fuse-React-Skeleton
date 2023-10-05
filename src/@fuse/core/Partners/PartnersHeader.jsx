import clsx from 'clsx';
import style from './Partners.module.css'
import { useEffect, useState } from 'react';
import { MdKeyboardDoubleArrowDown } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import ExampleComponent from './ExampleComponent';
import NavLinkAdapter from '../NavLinkAdapter/NavLinkAdapter';
import { Link } from 'react-router-dom';
import LanguagePages from './LanguagesPages';
import ChangeLanguageFunction from './ChangeLanguageFunction';
function PartnersHeader(props) {
    const slider = useSelector(state => state.slider.slider)
    const dispatch = useDispatch()
    const showBox = useSelector(state => state.slider.showBox)
    const { t } = useTranslation();

    return (
        <>

            <div style={{ height: '134px', background: 'white' }}>
                <div className="container" style={{ fontWeight: 800, fontSize: '2.4rem', display: 'flex', padding: '14px', gap: '6px' }}>
                    <MdKeyboardDoubleArrowDown style={{ fontSize: '33px' }} />
                    Գործընկերներ
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
                    <p >Այստեղ կարող եք փոխել գործընկերների կարգավորումները և ավելացնել նոր գործընկերներ</p>
                    <h1 style={{ color: 'red', fontSize: '18px', fontWeight: 800 }}>SOS</h1>
                </div>
            </div>
        </>
    )
}


export default PartnersHeader;