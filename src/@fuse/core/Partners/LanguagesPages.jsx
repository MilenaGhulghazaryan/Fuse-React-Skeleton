import { th } from "date-fns/locale"
import React, { useState } from 'react';

function LanguagePages({ tabs }) {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <div style={{ height: '800px' }}>
            <ul style={{ backgroundColor: ' rgb(189 189 189)', display: 'flex', alignItems: 'center', width: '106px', height: '29px', borderRadius: '3px', marginTop: '8px', justifyContent: 'space-evenly' }}>
                {tabs?.map((tab, index) => (
                    <li
                        key={index}
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

export default LanguagePages;




