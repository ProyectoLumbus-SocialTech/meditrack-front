import React, { useState } from 'react';

const Toolbar: React.FC = () => {
    const [selectedTab, setSelectedTab] = useState<string>('Biopsias');

    const handleTabClick = (tab: string) => {
        setSelectedTab(tab);
    };

    return (
        <div className="bg-medium-blue w-full p-2 flex items-center justify-between px-20 rounded-lg">
            <div 
                onClick={() => handleTabClick('Biopsias')}
                className={`text-white text-lg cursor-pointer text-base ${selectedTab === 'Biopsias' ? 'underline' : ''}`}
            >
                Biopsias
            </div>
            <div 
                onClick={() => handleTabClick('Citología')}
                className={`text-white text-lg cursor-pointer text-base ${selectedTab === 'Citología' ? 'underline' : ''}`}
            >
                Citología
            </div>
            <div 
                onClick={() => handleTabClick('Láminas')}
                className={`text-white text-lg cursor-pointer text-base ${selectedTab === 'Láminas' ? 'underline' : ''}`}
            >
                Láminas
            </div>
        </div>
    );
};

export default Toolbar;
