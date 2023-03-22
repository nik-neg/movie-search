import React, { useEffect } from 'react';
import {
    SButtonPanel,
    SButtonWrapper,
    SDashboardWrapper,
    SSearchBarWrapper,
} from './Dashboard.styles';
import { MovieList } from './MovieList';
import { Button } from '@mui/material';
import { AiFillBackward, AiFillForward } from 'react-icons/all';
import { SearchBar } from '../SearchBar/SearchBar';
import { IDashboardProps } from './types';

export const Dashboard = ({
    movies,
    content,
    onFetchMovies,
    onHandleSearch,
}: IDashboardProps): JSX.Element => {
    useEffect(() => {
        const fetchMovies = async () => {
            const response = await fetch(
                `http://www.omdbapi.com/?s=${
                    content ?? 'matrix'
                }&apikey=3e6650a7`
            );
            const data = await response.json();
            onFetchMovies?.(data.Search);
        };
        if (content.length > 3) {
            fetchMovies();
        } else {
            onFetchMovies?.([]);
        }
    }, [content]);
    return (
        <SDashboardWrapper>
            <MovieList movies={movies} />
            <SSearchBarWrapper>
                <SearchBar onSearch={onHandleSearch} content={content} />
            </SSearchBarWrapper>
            <SButtonPanel>
                <SButtonWrapper>
                    <Button
                        variant="contained"
                        style={{ backgroundColor: '#6B728E', width: '10rem' }}
                        startIcon={<AiFillBackward />}
                    >
                        Previous
                    </Button>
                </SButtonWrapper>

                <SButtonWrapper>
                    <Button
                        variant="contained"
                        endIcon={<AiFillForward />}
                        style={{ backgroundColor: '#6B728E', width: '10rem' }}
                    >
                        Next
                    </Button>
                </SButtonWrapper>
            </SButtonPanel>
        </SDashboardWrapper>
    );
};
