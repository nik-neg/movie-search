import React, { ChangeEvent, useState } from 'react';
import { TextField } from '@mui/material';
import { ISearchBarProps } from './types';

export const SearchBar = ({ onSearch }: ISearchBarProps) => {
    const [searchValue, setSearchValue] = useState('');

    const handleSearchChange = (
        event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => {
        setSearchValue(event.target.value);
        onSearch(event.target.value);
    };

    return (
        <TextField
            value={searchValue}
            onChange={handleSearchChange}
            style={{ width: '10%', backgroundColor: 'ghostwhite' }}
        />
    );
};
