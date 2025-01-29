import React, { useState } from 'react';
import Button from '../components/Button';

const Search: React.FC = () => {
    const [searchType, setSearchType] = useState('Nombres y Apellidos');
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSearchType(e.target.value);
    };

    const handleSearchQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };


    const handleSearch = () => {
        console.log('Searching for:', searchQuery, 'in', searchType);
    };

    return (
        <div className="bg-[#425E7A] w-full p-4 rounded-lg">
        
            <div className="flex items-center space-x-4">
                
                <i className="fa fa-search text-white" style={{ fontSize: '20px' }}></i> 

                <select
                    value={searchType}
                    onChange={handleSearchTypeChange}
                    className="bg-white text-black p-2 rounded-lg"
                >
                    <option className="text-sm" value="name-lastname">Nombres y Apellidos</option>
                    <option className="text-sm" value="hc">Historia Clínica</option>
                    <option className="text-sm" value="code">Código</option>
                </select>

                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchQueryChange}
                    placeholder="Escribe aquí..."
                    className="p-2 rounded-lg border border-gray-300 w-64 flex-1"
                />

                <Button onClick={handleSearch}>Buscar</Button>
            </div>
        </div>
    );
};

export default Search;
