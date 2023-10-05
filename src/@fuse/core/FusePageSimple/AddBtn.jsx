import { th } from "date-fns/locale"
import React, { useState } from 'react';
import style from './FusePageSimpleHeader.module.css'

function AddBtn({ tabs }) {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <div className={style.tabs}>
            <ul className={style.ul}>
                {tabs.map((tab, index) => (
                    <li
                        key={index}
                        className={index === activeTab ? style.active : style.li}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab.label}
                    </li>
                ))}
            </ul>
            <div className="tab-content">
                {tabs[activeTab].content}
            </div>
        </div>
    );
}

export default AddBtn;


export function AddBtn2({ tabs }) {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <div className={style.tabs}>
            <ul className={style.ul}>
                {tabs.map((tab, index) => (
                    <li
                        key={index}
                        className={index === activeTab ? style.active : style.li}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab.label}
                    </li>
                ))}
            </ul>
            <div className="tab-content">
                {tabs[activeTab].content}
            </div>
        </div>
    );
}

