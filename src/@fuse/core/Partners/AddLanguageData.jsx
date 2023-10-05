import { th } from "date-fns/locale"
import React, { useState } from 'react';

function AddLanguageData({ tabs }) {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <div >

            <div style={{ display: 'flex', position: 'absolute', top: '31%', left: '-31%', gap: '5px' }}>
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab.label}
                    </div>
                ))}
            </div>
            <div className="tab-content">
                {tabs[activeTab].content}
            </div>
        </div>
    );
}

export default AddLanguageData;




